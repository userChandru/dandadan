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
    <div className={`bg-gray-900 text-white transition-all duration-300 ease-in-out relative ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex items-center p-4">
        <h1 
          className={`text-2xl font-bold whitespace-nowrap transform transition-all duration-300 ease-in-out ${
            isCollapsed ? 'opacity-0' : 'opacity-100'
          }`}
        >
          Cocoa Cakes
        </h1>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`absolute ${!isCollapsed && 'right-2'} top-4 min-w-[32px] h-[32px] flex items-center justify-center hover:bg-gray-800 rounded-lg transition-all duration-200 transform hover:scale-110 z-50`}
        >
          {isCollapsed ? (
            <Icons.Menu className="w-7 h-7" />
          ) : (
            <Icons.X className="w-7 h-7" />
          )}
        </button>
      </div>
      
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-4 transition-all py-6 duration-200 ${
                isActive ? 'bg-blue-600' : 'hover:bg-gray-700'
              } ${isCollapsed ? 'justify-center' : 'gap-3'}`
            }
          >
            <span className="transform transition-transform duration-200 hover:scale-110">{item.icon}</span>
            {!isCollapsed && (
              <span className="transform transition-opacity duration-300">{item.label}</span>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;