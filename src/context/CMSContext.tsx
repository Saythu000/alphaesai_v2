"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  FullCMSData,
  DEFAULT_CMS_DATA,
  loadCMSData,
  saveCMSData,
  resetCMSData,
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
    const loaded = loadCMSData();
    setData(loaded);
    setIsLoaded(true);
  }, []);

  const updateData = (newData: FullCMSData) => {
    setData(newData);
    saveCMSData(newData);
  };

  const resetData = () => {
    const defaultData = resetCMSData();
    setData(defaultData);
  };

  return (
    <CMSContext.Provider value={{ data, updateData, resetData, isLoaded }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => useContext(CMSContext);
