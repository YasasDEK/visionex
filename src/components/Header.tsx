'use client';

import React from 'react';
import { Search, Bell, Settings, Plus, Layers } from 'lucide-react';
import { useTaskStore } from '@/store/taskStore';

const Header = () => {
  const { searchQuery, setSearchQuery } = useTaskStore();

  return (
    <header className="bg-white border-b border-gray-200 h-[72px] fixed top-0 right-0 left-0 z-20">
      <div className="h-full px-8 flex items-center justify-between">
        {/* Logo - Left side */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-[16px] text-gray-900">
            Board <span className="text-blue-600">App</span>
          </span>
        </div>

        {/* Right side - Everything else */}
        <div className="flex items-center gap-4">
          {/* Create New Board Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-[15px] flex items-center gap-2 transition-colors shadow-sm flex-shrink-0">
            Create new board
            <Plus className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Search Bar */}
          <div className="w-[320px]">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
              <input
                type="text"
                placeholder="Search tasks ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-xs pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Settings Icon */}
            <button className="p-2.5 hover:bg-gray-50 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-500" />
            </button>

            {/* Notifications */}
            <button className="p-2.5 hover:bg-gray-50 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
            </button>

            {/* User Avatar */}
            <button className="ml-1 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">U</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
