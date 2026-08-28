"use client";

import React, { useState } from "react";
import { Newspaper, Plus, Trash2, Edit3, Search } from "lucide-react";
import { FullCMSData, BlogPostCMSData } from "@/lib/cms-store";
import { BlogArticleModal } from "../modals/BlogArticleModal";

interface Props {
  formData: FullCMSData;
  setFormData: React.Dispatch<React.SetStateAction<FullCMSData>>;
}

export const BlogTab: React.FC<Props> = ({ formData, setFormData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingArticle, setEditingArticle] = useState<BlogPostCMSData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posts = formData.blog.articles || [];

  const filteredPosts = posts.filter(
    (p: BlogPostCMSData) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenNewArticle = () => {
    const newArt: BlogPostCMSData = {
      id: `post-${Date.now()}`,
      title: "New AI Architecture Article",
      category: "Engineering",
      author: "Dr. Godly",
      authorRole: "Chief Architect",
      readTime: "5 min read",
      date: new Date().toISOString(),
      snippet: "Summary of technical engineering insights.",
      content: {
        introduction: "Introduction to technical engineering concepts.",
        keyTakeaways: ["Key Takeaway 1", "Key Takeaway 2"],
        sections: [
          {
            heading: "Section 1",
            body: "Section body paragraph text...",
          },
        ],
        conclusion: "Conclusion summary.",
      },
    };
    setEditingArticle(newArt);
    setIsModalOpen(true);
  };

  const handleSaveArticle = (savedArticle: BlogPostCMSData) => {
    const exists = posts.some((p: BlogPostCMSData) => p.id === savedArticle.id);
    let updated: BlogPostCMSData[];
    if (exists) {
      updated = posts.map((p: BlogPostCMSData) => (p.id === savedArticle.id ? savedArticle : p));
    } else {
      updated = [savedArticle, ...posts];
    }
    setFormData((prev) => ({
      ...prev,
      blog: { ...prev.blog, articles: updated },
    }));
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      const updated = posts.filter((p: BlogPostCMSData) => p.id !== id);
      setFormData((prev) => ({
        ...prev,
        blog: { ...prev.blog, articles: updated },
      }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#ddc1b0] p-6 rounded-2xl shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-[#ddc1b0] pb-4">
          <div>
            <h2 className="font-['Hanken_Grotesk'] text-xl font-extrabold text-[#964900] flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-[#964900]" />
              Blog Articles & Research Library Manager (/blog)
            </h2>
            <p className="text-xs text-[#564336] mt-0.5">
              Create, edit, publish, or remove technical articles displayed live on the Blog.
            </p>
          </div>
          <button
            type="button"
            onClick={handleOpenNewArticle}
            className="bg-[#964900] text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow hover:bg-[#783a00]"
          >
            <Plus className="w-4 h-4" />
            New Article
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search articles by title or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-[#ddc1b0] rounded-xl focus:outline-none focus:border-[#964900]"
          />
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPosts.map((post: BlogPostCMSData) => (
            <div
              key={post.id}
              className="p-4 border border-[#ddc1b0] bg-[#fff8f5] rounded-xl space-y-3 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold bg-[#964900]/10 text-[#964900] px-2 py-0.5 rounded-full uppercase">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingArticle(post);
                        setIsModalOpen(true);
                      }}
                      className="text-xs font-bold text-[#964900] hover:underline flex items-center gap-1"
                    >
                      <Edit3 className="w-3.5 h-3.5" /> Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteArticle(post.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h4 className="font-bold text-sm text-[#1c1917] line-clamp-1">{post.title}</h4>
                <p className="text-xs text-[#564336] line-clamp-2 mt-1">{post.snippet}</p>
              </div>

              <div className="pt-2 border-t border-[#ddc1b0]/50 flex items-center justify-between text-[11px] text-[#564336]/80 font-mono">
                <span>By {post.author}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BlogArticleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        article={editingArticle}
        onSave={handleSaveArticle}
      />
    </div>
  );
};
