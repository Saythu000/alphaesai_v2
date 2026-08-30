"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  FullCMSData,
  DEFAULT_CMS_DATA,
  loadCMSData,
  saveCMSData,
  resetCMSData,
  sanitizeCMSData,
  BlogPostCMSData,
} from "@/lib/cms-store";

interface CMSContextType {
  data: FullCMSData;
  updateData: (newData: FullCMSData) => Promise<void>;
  resetData: () => Promise<void>;
  isLoaded: boolean;
  addBlogPost: (article: BlogPostCMSData) => void;
  updateBlogPost: (id: string, updated: BlogPostCMSData) => void;
  deleteBlogPost: (id: string) => void;
}

const CMSContext = createContext<CMSContextType>({
  data: DEFAULT_CMS_DATA,
  updateData: async () => {},
  resetData: async () => {},
  isLoaded: false,
  addBlogPost: () => {},
  updateBlogPost: () => {},
  deleteBlogPost: () => {},
});

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<FullCMSData>(DEFAULT_CMS_DATA);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Initial local load
    const loadedLocal = loadCMSData();
    setData(loadedLocal);

    // 2. Fetch latest from Neon PostgreSQL database
    fetch("/api/cms")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          const sanitized = sanitizeCMSData(resData.data);
          setData(sanitized);
          saveCMSData(sanitized);
          // Sync sanitized data back to Neon DB if DB had missing keys
          fetch("/api/cms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sanitized),
          }).catch(() => {});
        }
      })
      .catch((err) => {
        console.warn("Could not fetch CMS data from Neon DB, using local fallback:", err);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  const updateData = async (newData: FullCMSData) => {
    setData(newData);
    saveCMSData(newData);

    // Sync update to Neon PostgreSQL database
    try {
      const res = await fetch("/api/cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });

      const resData = await res.json().catch(() => ({}));

      if (!res.ok || resData.success === false) {
        const errorMsg = resData.error || `Server returned HTTP ${res.status}`;
        console.warn("Neon DB Save Warning:", errorMsg);
        throw new Error(errorMsg);
      }
    } catch (err: unknown) {
      console.error("Failed to save CMS data to Neon DB:", err);
      throw err;
    }
  };

  const resetData = async () => {
    const defaultData = resetCMSData();
    setData(defaultData);

    try {
      const res = await fetch("/api/cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(defaultData),
      });
      const resData = await res.json().catch(() => ({}));
      if (!res.ok || resData.success === false) {
        throw new Error(resData.error || `HTTP ${res.status}`);
      }
    } catch (err: unknown) {
      console.error("Failed to reset CMS data in Neon DB:", err);
      throw err;
    }
  };

  const addBlogPost = (article: BlogPostCMSData) => {
    const updated: FullCMSData = {
      ...data,
      blog: {
        ...data.blog,
        articles: [article, ...(data.blog?.articles || [])],
      },
    };
    updateData(updated);
  };

  const updateBlogPost = (id: string, updatedArticle: BlogPostCMSData) => {
    const articles = (data.blog?.articles || []).map((art) =>
      art.id === id ? updatedArticle : art
    );
    const updated: FullCMSData = {
      ...data,
      blog: {
        ...data.blog,
        articles,
      },
    };
    updateData(updated);
  };

  const deleteBlogPost = (id: string) => {
    const articles = (data.blog?.articles || []).filter((art) => art.id !== id);
    const updated: FullCMSData = {
      ...data,
      blog: {
        ...data.blog,
        articles,
      },
    };
    updateData(updated);
  };

  return (
    <CMSContext.Provider
      value={{
        data,
        updateData,
        resetData,
        isLoaded,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => useContext(CMSContext);
