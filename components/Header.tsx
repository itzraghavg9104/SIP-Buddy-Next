import React from 'react';
import { Page } from '../types';
// Fix: Removed 'IconTarget' as it is not an exported member of './Icons'.
import { IconChartPie, IconLayoutDashboard, IconBook, IconSparkles, IconCalculator, IconInfoCircle } from './Icons';
import { logoFull } from '../assets/logo';
import SafeImage from './SafeImage';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  showLabelOnlyWhenActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, isActive, onClick, showLabelOnlyWhenActive = false }) => {
  const showLabel = !showLabelOnlyWhenActive || isActive;

  return (
    <button
      onClick={onClick}
      className={`flex items-center rounded-md font-medium transition-colors ${
        showLabel ? 'px-4 py-2' : 'p-2'
      } ${
        !showLabelOnlyWhenActive ? 'text-sm' : ''
      } ${
        isActive
          ? 'bg-white text-blue-600 shadow-sm'
          : 'text-slate-500 hover:bg-slate-100'
      }`}
    >
      {icon}
      {showLabel && <span className="ml-2">{label}</span>}
    </button>
  );
};


const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {

  const fallbackLogo = (
    <div className="flex items-center h-10">
        <IconSparkles className="h-7 w-7 text-blue-600" />
        <span className="text-xl font-bold ml-2 text-slate-800">SIP Buddy</span>
    </div>
  );

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <SafeImage
                src={logoFull}
                fallback={fallbackLogo}
                alt="SIP Buddy Logo"
                className="h-11"
             />
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
            <NavItem
              label="Calculator"
              icon={<IconCalculator className="h-5 w-5" />}
              isActive={currentPage === Page.Calculator}
              onClick={() => navigateTo(Page.Calculator)}
            />
            <NavItem
              label="About"
              icon={<IconInfoCircle className="h-5 w-5" />}
              isActive={currentPage === Page.About}
              onClick={() => navigateTo(Page.About)}
            />
          </div>
          <div className="flex items-center md:hidden">
            {/* Mobile menu could be implemented here */}
          </div>
        </div>
      </div>
       <div className="md:hidden flex items-center justify-center space-x-1 bg-slate-100 p-1 m-2 rounded-lg text-xs">
            <NavItem
              label="Planner"
              icon={<IconChartPie className="h-5 w-5" />}
              isActive={currentPage === Page.Planner}
              onClick={() => navigateTo(Page.Planner)}
              showLabelOnlyWhenActive
            />
            <NavItem
              label="Dashboard"
              icon={<IconLayoutDashboard className="h-5 w-5" />}
              isActive={currentPage === Page.Dashboard}
              onClick={() => navigateTo(Page.Dashboard)}
              showLabelOnlyWhenActive
            />
            <NavItem
              label="Learn"
              icon={<IconBook className="h-5 w-5" />}
              isActive={currentPage === Page.Learn}
              onClick={() => navigateTo(Page.Learn)}
              showLabelOnlyWhenActive
            />
            <NavItem
              label="Calculator"
              icon={<IconCalculator className="h-5 w-5" />}
              isActive={currentPage === Page.Calculator}
              onClick={() => navigateTo(Page.Calculator)}
              showLabelOnlyWhenActive
            />
            <NavItem
              label="About"
              icon={<IconInfoCircle className="h-5 w-5" />}
              isActive={currentPage === Page.About}
              onClick={() => navigateTo(Page.About)}
              showLabelOnlyWhenActive
            />
        </div>
    </header>
  );
};

export default Header;