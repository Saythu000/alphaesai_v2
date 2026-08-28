"use client";

import React from "react";
import { Edit3, X } from "lucide-react";
import { BlogPostCMSData } from "@/lib/cms-store";
import { FormField } from "../common/FormField";

interface BlogArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: BlogPostCMSData | null;
  onSave: (article: BlogPostCMSData) => void;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({
  isOpen,
  onClose,
  article,
  onSave,
}) => {
  const [formData, setFormData] = React.useState<BlogPostCMSData | null>(article);

  React.useEffect(() => {
    setFormData(article);
  }, [article]);

  if (!isOpen || !formData) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#ddc1b0] rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-[#ddc1b0]">
          <h3 className="text-lg font-bold text-[#964900] flex items-center gap-2">
            <Edit3 className="w-5 h-5" />
            {formData.id ? "Edit Blog Article" : "Create New Article"}
          </h3>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
          <FormField
            label="Article Title"
            value={formData.title}
            onChange={(val) => setFormData({ ...formData, title: val })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Category"
              value={formData.category}
              onChange={(val) => setFormData({ ...formData, category: val })}
            />
            <FormField
              label="Read Time"
              value={formData.readTime}
              onChange={(val) => setFormData({ ...formData, readTime: val })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Author Name"
              value={formData.author}
              onChange={(val) => setFormData({ ...formData, author: val })}
            />
            <FormField
              label="Author Role"
              value={formData.authorRole}
              onChange={(val) => setFormData({ ...formData, authorRole: val })}
            />
          </div>

          <FormField
            label="Snippet"
            type="textarea"
            rows={2}
            value={formData.snippet}
            onChange={(val) => setFormData({ ...formData, snippet: val })}
          />

          <FormField
            label="Introduction"
            type="textarea"
            rows={4}
            value={formData.content.introduction}
            onChange={(val) =>
              setFormData({
                ...formData,
                content: { ...formData.content, introduction: val },
              })
            }
          />

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#ddc1b0]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#964900] text-white text-xs font-bold rounded-xl hover:bg-[#783a00] shadow"
            >
              Save Article Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
