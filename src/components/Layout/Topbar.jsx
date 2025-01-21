import React from 'react';
import { Search } from 'lucide-react';

const Topbar = () => {
  const profit = 2230;
  const gst = 225;

  return (
    <div className="bg-white border-b h-16 flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold text-gray-800">Cocoa Cakes</h1>
      
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">GST:</span>
          <span className="font-semibold">₹{gst}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Profit:</span>
          <span className={`font-semibold ${profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            ₹{profit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;