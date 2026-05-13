
import { Users, Mail, MousePointerClick, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { title: "Total Contacts", value: "12,345", icon: Users, change: "+12%" },
    { title: "Emails Sent", value: "45,231", icon: Mail, change: "+5%" },
    { title: "Click Rate", value: "24.5%", icon: MousePointerClick, change: "+2.1%" },
    { title: "Conversion Rate", value: "3.2%", icon: TrendingUp, change: "+1.2%" },
  ];

  const recentCampaigns = [
    { id: 1, name: "Summer Sale 2026", status: "Active", sent: "12,000", clicks: "3,400" },
    { id: 2, name: "Welcome Series Flow", status: "Completed", sent: "5,430", clicks: "1,200" },
    { id: 3, name: "Monthly Newsletter", status: "Draft", sent: "-", clicks: "-" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border shadow-sm flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
              <p className="text-sm text-green-600 mt-2 font-medium">{stat.change} target</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <stat.icon className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden mt-8">
        <div className="px-6 py-5 border-b">
          <h2 className="text-lg font-semibold">Recent Campaigns</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4">Campaign Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Emails Sent</th>
                <th className="px-6 py-4">Clicks</th>
              </tr>
            </thead>
            <tbody className="divide-y relative">
              {recentCampaigns.map((camp) => (
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
