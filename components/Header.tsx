
import React from 'react';
import { Page } from '../types';
import { IconChartPie, IconLayoutDashboard, IconBook, IconSparkles, IconTarget } from './Icons';


interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-white text-blue-600 shadow-sm'
        : 'text-slate-500 hover:bg-slate-100'
    }`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <IconTarget className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-slate-800">SIP Planner</span>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-slate-100 p-1 rounded-lg">
            <NavItem
              label="Planner"
              icon={<IconChartPie className="h-5 w-5" />}
              isActive={currentPage === Page.Planner}
              onClick={() => navigateTo(Page.Planner)}
            />
            <NavItem
              label="Dashboard"
              icon={<IconLayoutDashboard className="h-5 w-5" />}
              isActive={currentPage === Page.Dashboard}
              onClick={() => navigateTo(Page.Dashboard)}
            />
            <NavItem
              label="Learn"
              icon={<IconBook className="h-5 w-5" />}
              isActive={currentPage === Page.Learn}
              onClick={() => navigateTo(Page.Learn)}
            />
          </div>
          <div className="flex items-center md:hidden">
            {/* Mobile menu could be implemented here */}
          </div>
        </div>
      </div>
       <div className="md:hidden flex items-center justify-center space-x-2 bg-slate-100 p-2 m-2 rounded-lg">
            <NavItem
              label="Planner"
              icon={<IconChartPie className="h-5 w-5" />}
              isActive={currentPage === Page.Planner}
              onClick={() => navigateTo(Page.Planner)}
            />
            <NavItem
              label="Dashboard"
              icon={<IconLayoutDashboard className="h-5 w-5" />}
              isActive={currentPage === Page.Dashboard}
              onClick={() => navigateTo(Page.Dashboard)}
            />
            <NavItem
              label="Learn"
              icon={<IconBook className="h-5 w-5" />}
              isActive={currentPage === Page.Learn}
              onClick={() => navigateTo(Page.Learn)}
            />
        </div>
    </header>
  );
};

export default Header;
