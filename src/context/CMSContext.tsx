"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  FullCMSData,
  DEFAULT_CMS_DATA,
  loadCMSData,
  saveCMSData,
  resetCMSData,
  sanitizeCMSData,
} from "@/lib/cms-store";

interface CMSContextType {
  data: FullCMSData;
  updateData: (newData: FullCMSData) => void;
  resetData: () => void;
  isLoaded: boolean;
}

const CMSContext = createContext<CMSContextType>({
  data: DEFAULT_CMS_DATA,
  updateData: () => {},
  resetData: () => {},
  isLoaded: false,
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

  return (
    <CMSContext.Provider value={{ data, updateData, resetData, isLoaded }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => useContext(CMSContext);
