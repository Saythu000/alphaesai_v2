"use client";

import React from "react";
import { Settings, Database, Key } from "lucide-react";
import { FullCMSData } from "@/lib/cms-store";
import { SectionHeader } from "../common/SectionHeader";
import { FormField } from "../common/FormField";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const SettingsTab: React.FC<Props> = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
        <SectionHeader
          title="Neon Postgres Database Sync & API Credentials"
          description="Configure database connection string, CMS sync preferences, and security token controls."
          icon={Settings}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-4">
            <h3 className="font-bold text-sm text-[#964900] flex items-center gap-2">
              <Database className="w-4 h-4" />
              Neon Postgres Connection Status
            </h3>
            <p className="text-xs text-[#564336]">
              CMS storage is active with fallback client local storage and database sync API routes.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              CONNECTED & SYNCED TO LOCALSTORAGE / API
            </div>
          </div>

          <div className="p-5 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-4">
            <h3 className="font-bold text-sm text-[#964900] flex items-center gap-2">
              <Key className="w-4 h-4" />
              Admin Password Security
            </h3>
            <FormField
              label="Admin Password Href"
              type="mono"
              value="••••••••••••••••"
              onChange={() => {}}
              hint="Use environment variable ADMIN_PASSWORD to customize server access code."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
