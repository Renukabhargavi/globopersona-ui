import Link from "next/link";
import { Plus } from "lucide-react";

export default function CampaignsPage() {
  const campaigns = [
    { id: 1, name: "Summer Sale 2026", status: "Active", sent: "12,000", clicks: "3,400", date: "May 13, 2026" },
    { id: 2, name: "Welcome Series Flow", status: "Completed", sent: "5,430", clicks: "1,200", date: "May 10, 2026" },
    { id: 3, name: "Monthly Newsletter", status: "Draft", sent: "-", clicks: "-", date: "May 14, 2026" },
    { id: 4, name: "Re-engagement Push", status: "Active", sent: "8,900", clicks: "2,100", date: "May 12, 2026" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <Link href="/campaigns/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          Create Campaign
        </Link>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4">Campaign Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Emails Sent</th>
                <th className="px-6 py-4">Clicks</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y relative">
              {campaigns.map((camp) => (
                <tr key={camp.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{camp.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      camp.status === 'Active' ? 'bg-green-100 text-green-700' :
                      camp.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {camp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{camp.sent}</td>
                  <td className="px-6 py-4">{camp.clicks}</td>
                  <td className="px-6 py-4 text-gray-500">{camp.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:underline font-medium text-sm">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
