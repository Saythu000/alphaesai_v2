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
  updateData: (newData: FullCMSData) => void;
  resetData: () => void;
  isLoaded: boolean;
  addBlogPost: (article: BlogPostCMSData) => void;
  updateBlogPost: (id: string, updated: BlogPostCMSData) => void;
  deleteBlogPost: (id: string) => void;
}

const CMSContext = createContext<CMSContextType>({
  data: DEFAULT_CMS_DATA,
  updateData: () => {},
  resetData: () => {},
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

  const updateData = (newData: FullCMSData) => {
    setData(newData);
    saveCMSData(newData);

    // Sync update to Neon PostgreSQL database
    fetch("/api/cms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).catch((err) => console.error("Failed to save CMS data to Neon DB:", err));
  };

  const resetData = () => {
    const defaultData = resetCMSData();
    setData(defaultData);

    // Reset Neon PostgreSQL database content to defaults
    fetch("/api/cms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(defaultData),
    }).catch((err) => console.error("Failed to reset CMS data in Neon DB:", err));
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
