import React from 'react';
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
    <div className={`
      bg-gray-900 text-white relative
      transition-[width] duration-500 ease-in-out
      ${isCollapsed ? 'w-16' : 'w-64'}
    `}>
      <div className="flex items-center p-4">
        <h1 
          className={`
            text-2xl font-bold whitespace-nowrap
            transition-all duration-500 ease-in-out
            ${isCollapsed ? 'opacity-0 -translate-x-10' : 'opacity-100 translate-x-0'}
          `}
        >
          Cocoa Cakes
        </h1>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`
            absolute top-4
            min-w-[32px] h-[32px]
            flex items-center justify-center
            rounded-lg z-50
            transition-all duration-500 ease-in-out
            hover:bg-gray-800 hover:scale-110
            ${!isCollapsed ? 'right-2' : 'right-[14px]'}
          `}
        >
          {isCollapsed ? (
            <Icons.Menu className="w-7 h-7 transition-transform duration-300" />
          ) : (
            <Icons.X className="w-7 h-7 transition-transform duration-300" />
          )}
        </button>
      </div>
      
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              relative flex items-center py-6
              transition-colors duration-200 ease-in-out
              ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}
            `}
          >
            <div className={`
              min-w-[64px] flex justify-center
              transition-all duration-500 ease-in-out
              ${!isCollapsed && 'mr-3'}
            `}>
              <span className="transition-transform duration-200 hover:scale-110">
                {item.icon}
              </span>
            </div>
            <span className={`
              absolute left-16 whitespace-nowrap
              transition-all duration-500 ease-in-out
              ${isCollapsed 
                ? 'opacity-0 -translate-x-10 pointer-events-none' 
                : 'opacity-100 translate-x-0'
              }
            `}>
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;