import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as Icons from 'lucide-react';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { path: '/', icon: <Icons.LayoutGrid />, label: 'Dashboard' },
    { path: '/bank', icon: <Icons.Building2 />, label: 'Bank' },
    { path: '/marketplace', icon: <Icons.Store />, label: 'MarketPlace' },
    { path: '/gst', icon: <Icons.Receipt />, label: 'GST' },
    { path: '/company', icon: <Icons.Building />, label: 'Company' },
  ];

  return (
    <div className={`bg-gray-600 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h1 className="text-2xl font-bold">Cocoa Cakes</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-700 rounded-lg"
        >
          {isCollapsed ? <Icons.ChevronRight /> : <Icons.ChevronLeft />}
        </button>
      </div>
      
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-4 ${
                isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
              } ${isCollapsed ? 'justify-center' : 'gap-3'}`
            }
          >
            <span>{item.icon}</span>
            {!isCollapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;