import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  Store, 
  Receipt, 
  Building, 
  ChevronLeft,
  ChevronRight,
  User
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/bank', icon: Building2, label: 'Bank' },
    { path: '/marketplace', icon: Store, label: 'Marketplace' },
    { path: '/gst', icon: Receipt, label: 'GST' },
    { path: '/company', icon: Building, label: 'Company' },
  ];

  return (
    <div className={`bg-gray-900 text-white h-screen flex flex-col transition-all duration-300 ${
      isCollapsed ? 'w-20' : 'w-64'
    }`}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-4 self-end text-gray-400 hover:text-white mb-4"
      >
        {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>

      <nav className="flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 my-2 mb-4 ${
                isActive ? 'bg-blue-600' : 'hover:bg-gray-800'
              } transition-colors`
            }
          >
            <item.icon size={24} />
            {!isCollapsed && <span className="ml-4">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-gray-700 p-4">
        <div className="flex items-center">
          <div className="bg-gray-700 rounded-full p-2">
            <User size={24} />
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium">Chandru</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;