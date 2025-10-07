'use client';

import Image from 'next/image';
import { Search, Bell, Settings, Plus, Layers, Menu } from 'lucide-react';
import { useTaskStore } from '@/store/taskStore';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const { searchQuery, setSearchQuery } = useTaskStore();

  return (
    <header className="bg-white border-b border-gray-200 h-[72px] fixed top-0 right-0 left-0 z-20">
      <div className="h-full px-4 md:px-8 flex items-center justify-between">
        {/* Menu Icon (Mobile) and Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Hamburger Menu - Mobile Only */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-[16px] text-gray-900">
              Board <span className="text-blue-600">App</span>
            </span>
          </div>
        </div>

        {/* Right side - Everything else */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Create New Board Button - Hidden on mobile */}
          <button className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-[15px] items-center gap-2 transition-colors shadow-sm flex-shrink-0">
            Create new board
            <Plus className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Search Bar - Responsive width */}
          <div className="hidden sm:block w-[200px] lg:w-[320px]">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
              <input
                type="text"
                placeholder="Search tasks ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
            {/* Search Icon - Mobile Only */}
            <button className="sm:hidden p-2.5 hover:bg-gray-50 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-500" />
            </button>

            {/* Settings Icon - Hidden on small mobile */}
            <button className="hidden sm:block p-2.5 hover:bg-gray-50 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-500" />
            </button>

            {/* Notifications */}
            <button className="p-2.5 hover:bg-gray-50 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full"></span>
            </button>

            {/* User Avatar */}
            <button className="ml-1 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden P-2">
                <Image
                  src="/images/Vector.png"
                  alt="User"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
