"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreateCampaignPage() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    audience: "all",
    schedule: "now"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Campaign saved!");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/campaigns" className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold">Create Campaign</h1>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-xl border shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="e.g. Summer Sale 2026"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Subject Line</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Check out our latest offers..."
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience</label>
            <select 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              value={formData.audience}
              onChange={(e) => setFormData({...formData, audience: e.target.value})}
            >
              <option value="all">All Subscribers</option>
              <option value="active">Active Users Only</option>
              <option value="inactive">Inactive Users (30+ days)</option>
            </select>
          </div>

          <div className="pt-4 border-t flex justify-end gap-3">
            <Link href="/campaigns" className="px-6 py-2 border rounded-lg hover:bg-gray-50 font-medium transition-colors">
              Cancel
            </Link>
            <button type="submit" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Save Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
