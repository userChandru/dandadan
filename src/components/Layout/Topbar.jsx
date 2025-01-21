import React from "react";
import * as Icons from "lucide-react";

const Topbar = ({ isCollapsed }) => {
  return (
    <div className="h-16 bg-white border-b flex items-center px-6">
      <div className="w-1/4 overflow-hidden">
        <h1 
          className={`text-2xl font-bold transform transition-all duration-300 ease-in-out ${
            isCollapsed ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          Cocoa Cakes
        </h1>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="flex-grow relative">
          <input
            type="search"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <Icons.Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
      </div>

      <div className="w-1/3 flex justify-end">
        <div className="text-right">
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
            <span>GST:</span>
            <span className="font-semibold">₹225</span>
          </div>
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
            <span>Profit:</span>
            <span className="text-green-500 font-semibold">₹2230</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
