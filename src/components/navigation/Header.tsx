import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';
import { useMenu } from '../../contexts/MenuContext';

const Header: React.FC = () => {
  const { toggleSidebar } = useMenu();

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 md:hidden focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:block ml-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Search supply chain data..."
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <Bell size={20} />
            </button>
            <div className="relative">
              <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600">
                <span className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <User size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;