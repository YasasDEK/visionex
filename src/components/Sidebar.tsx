'use client';

import React from 'react';
import {
  LayoutDashboard,
  Layers,
  ChevronRight,
  MessageSquare,
  Calendar,
  Users,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const [isBoardsExpanded, setIsBoardsExpanded] = React.useState(true);

  return (
    <div className="w-[220px] bg-white border-r border-gray-200 flex-col h-screen fixed left-0 top-0 z-10 hidden md:flex">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900">
            Board <span className="text-blue-600">App</span>
          </span>
        </div>
      </div>

      {/* Workspace */}
      <div className="px-4 py-3">
        <div className="flex items-center border gap-2 rounded-lg px-3 py-2">
          <div className="w-6 h-6 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-medium">W</span>
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">Workspace</p>
            <p className="text-sm font-medium text-gray-900">Root folder</p>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 overflow-y-auto">
        {/* Dashboard */}
        <div className="mb-4">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-medium">Dashboard</span>
          </a>
        </div>

        {/* Boards Section */}
        <div className="mb-4">
          <button
            onClick={() => setIsBoardsExpanded(!isBoardsExpanded)}
            className="flex items-center gap-2 px-3 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors w-full"
          >
            <Layers className="w-5 h-5" />
            <span className="text-sm font-medium flex-1 text-left">Boards</span>
            <ChevronRight
              className={`w-4 h-4 transition-transform ${
                isBoardsExpanded ? 'rotate-90' : ''
              }`}
            />
          </button>

          {isBoardsExpanded && (
            <div className="ml-4 mt-2 space-y-1">
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors text-sm"
              >
                <ChevronRight className="w-3 h-3" />
                Create routes
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors text-sm"
              >
                <ChevronRight className="w-3 h-3" />
                Deployment App
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-sm font-medium"
              >
                <ChevronRight className="w-3 h-3" />
                Sport Xi Project
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors text-sm"
              >
                <ChevronRight className="w-3 h-3" />
                Wordpress theme
              </a>
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="mb-4">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors relative"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm font-medium">Messages</span>
            <span className="ml-auto w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
              8
            </span>
          </a>
        </div>

        {/* Calendar */}
        <div className="mb-4">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Calendar</span>
          </a>
        </div>

        {/* Team members */}
        <div className="mb-4">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Team members</span>
          </a>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors mb-2"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Support</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
