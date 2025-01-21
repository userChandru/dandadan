import React from 'react';
import * as Icons from 'lucide-react';

const Dashboard = () => {
  const analyticsData = {
    metrics: [
      { label: 'Total Sales', value: '1,478', change: '+12.5%', icon: <Icons.DollarSign /> },
      { label: 'Conversion Rate', value: '93%', change: '+2.4%', icon: <Icons.TrendingUp /> },
      { label: 'Growth Rate', value: '1.4%', change: '+0.3%', icon: <Icons.LineChart /> },
      { label: 'Active Users', value: '53', change: '+8', icon: <Icons.Users /> },
    ],
    collaborators: [
      { name: 'Iyangaar Bakery', status: 'active' },
      { name: 'Iyangaar Bakery', status: 'active' },
      { name: 'Iyangaar Bakery', status: 'active' },
    ],
    company: {
      name: 'Cocoa Cakes',
      type: 'Bakery',
      logo: <Icons.Cake />
    }
  };

  return (
    <div className="flex h-full">
      {/* Analytics Section (Scrollable) */}
      <div className="flex-1 overflow-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Supply Chain Dashboard</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          {analyticsData.metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-600">{metric.icon}</span>
                <h3 className="text-gray-500 text-sm">{metric.label}</h3>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold">{metric.value}</span>
                <span className="text-green-500 text-sm">{metric.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Revenue Distribution</h3>
            <div className="h-64 flex items-center justify-center">
              <Icons.PieChart size={200} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Monthly Trends</h3>
            <div className="h-64 flex items-center justify-center">
              <Icons.BarChart size={200} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-white p-6 border-l flex flex-col">
        {/* Collaborators Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-6">Collaboration</h2>
          <div className="space-y-4">
            {analyticsData.collaborators.map((collaborator, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-gray-200 bg-gray-50"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <p className="font-medium">{collaborator.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Section */}
        <div className="mt-6 p-4 rounded-lg border border-gray-200 bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full">
              {analyticsData.company.logo}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{analyticsData.company.name}</h3>
              <p className="text-gray-600 text-sm">{analyticsData.company.type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;