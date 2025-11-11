import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { IconChartPie, IconLayoutDashboard, IconBook, IconSparkles, IconCalculator, IconInfoCircle, IconApps, IconUser, IconLogout, IconSettings, IconListDetails } from './Icons';
import { logoFull } from '../assets/logo';
import SafeImage from './SafeImage';
import { User } from 'firebase/auth';


interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
  user: User | null;
  onLogout: () => void;
}

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  showLabelOnlyWhenActive?: boolean;
  dataTourId?: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, isActive, onClick, showLabelOnlyWhenActive = false, dataTourId }) => {
  const showLabel = !showLabelOnlyWhenActive || isActive;

  return (
    <button
      onClick={onClick}
      data-tour-id={dataTourId}
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

const ProfileDropdown: React.FC<{ user: User; onLogout: () => void; navigateTo: (page: Page) => void; }> = ({ user, onLogout, navigateTo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNavigation = (page: Page) => {
      navigateTo(page);
      setIsOpen(false);
    }
    
    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center ring-2 ring-offset-2 ring-transparent hover:ring-blue-500 transition-shadow">
                {user.photoURL ? (
                    <img src={user.photoURL} alt="User" className="w-full h-full rounded-full object-cover" />
                ) : (
                    <IconUser className="h-6 w-6 text-slate-600" />
                )}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50">
                    <div className="px-4 py-2 border-b">
                        <p className="text-sm font-semibold text-slate-800 truncate">{user.displayName || 'User'}</p>
                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                    </div>
                    <button onClick={() => handleNavigation(Page.MyPlans)} className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                        <IconListDetails className="h-4 w-4" />
                        <span>My Plans</span>
                    </button>
                    <button onClick={() => handleNavigation(Page.Profile)} className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                        <IconSettings className="h-4 w-4" />
                        <span>Profile Settings</span>
                    </button>
                    <button onClick={onLogout} className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        <IconLogout className="h-4 w-4" />
                        <span>Logout</span>
                    </button>
                </div>
            )}
        </div>
    );
};


const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo, user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (currentPage === Page.Home) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on initial render
    } else {
      setIsScrolled(true); // Always have background on non-home pages
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  const fallbackLogo = (
    <div className="flex items-center h-10">
        <IconSparkles className="h-7 w-7 text-blue-600" />
        <span className="text-xl font-bold ml-2 text-slate-800">SIP Buddy</span>
    </div>
  );
  
  const headerClass = `sticky top-0 z-40 transition-all duration-300 ${
    isScrolled || currentPage !== Page.Home
      ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm'
      : 'bg-transparent border-b border-transparent'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => navigateTo(Page.Home)} aria-label="Go to Homepage">
              <SafeImage
                  src={logoFull}
                  fallback={fallbackLogo}
                  alt="SIP Buddy Logo"
                  className="h-11"
              />
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-slate-100 p-1 rounded-lg">
            <NavItem
              label="Planner"
              icon={<IconChartPie className="h-5 w-5" />}
              isActive={currentPage === Page.Planner}
              onClick={() => navigateTo(Page.Planner)}
              dataTourId="planner-step"
            />
            {user && (
              <NavItem
                label="My Plans"
                icon={<IconListDetails className="h-5 w-5" />}
                isActive={currentPage === Page.MyPlans}
                onClick={() => navigateTo(Page.MyPlans)}
              />
            )}
            <NavItem
              label="Dashboard"
              icon={<IconLayoutDashboard className="h-5 w-5" />}
              isActive={currentPage === Page.Dashboard}
              onClick={() => navigateTo(Page.Dashboard)}
              dataTourId="dashboard-step"
            />
            <NavItem
              label="Learn"
              icon={<IconBook className="h-5 w-5" />}
              isActive={currentPage === Page.Learn}
              onClick={() => navigateTo(Page.Learn)}
              dataTourId="learn-step"
            />
            <NavItem
              label="Calculator"
              icon={<IconCalculator className="h-5 w-5" />}
              isActive={currentPage === Page.Calculator}
              onClick={() => navigateTo(Page.Calculator)}
              dataTourId="calculator-step"
            />
             <NavItem
              label="More"
              icon={<IconApps className="h-5 w-5" />}
              isActive={currentPage === Page.More}
              onClick={() => navigateTo(Page.More)}
              dataTourId="more-step"
            />
            <NavItem
              label="About"
              icon={<IconInfoCircle className="h-5 w-5" />}
              isActive={currentPage === Page.About}
              onClick={() => navigateTo(Page.About)}
            />
          </div>
          <div className="flex items-center">
             {user ? (
                 <ProfileDropdown user={user} onLogout={onLogout} navigateTo={navigateTo} />
             ) : (
                <button onClick={() => navigateTo(Page.Auth)} className="hidden md:block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors text-sm">
                    Login / Sign Up
                </button>
             )}
          </div>
        </div>
      </div>
       <div className="md:hidden flex items-center justify-around bg-slate-100 p-1 m-2 rounded-lg text-xs">
            <NavItem
            label="Planner"
            icon={<IconChartPie className="h-5 w-5" />}
            isActive={currentPage === Page.Planner}
            onClick={() => navigateTo(Page.Planner)}
            showLabelOnlyWhenActive
            dataTourId="planner-step-mobile"
            />
            {user && (
              <NavItem
                label="My Plans"
                icon={<IconListDetails className="h-5 w-5" />}
                isActive={currentPage === Page.MyPlans}
                onClick={() => navigateTo(Page.MyPlans)}
                showLabelOnlyWhenActive
              />
            )}
            <NavItem
            label="Dashboard"
            icon={<IconLayoutDashboard className="h-5 w-5" />}
            isActive={currentPage === Page.Dashboard}
            onClick={() => navigateTo(Page.Dashboard)}
            showLabelOnlyWhenActive
            dataTourId="dashboard-step-mobile"
            />
            <NavItem
            label="Learn"
            icon={<IconBook className="h-5 w-5" />}
            isActive={currentPage === Page.Learn}
            onClick={() => navigateTo(Page.Learn)}
            showLabelOnlyWhenActive
            dataTourId="learn-step-mobile"
            />
            <NavItem
            label="Calculator"
            icon={<IconCalculator className="h-5 w-5" />}
            isActive={currentPage === Page.Calculator}
            onClick={() => navigateTo(Page.Calculator)}
            showLabelOnlyWhenActive
            dataTourId="calculator-step-mobile"
            />
            <NavItem
            label="More"
            icon={<IconApps className="h-5 w-5" />}
            isActive={currentPage === Page.More}
            onClick={() => navigateTo(Page.More)}
            showLabelOnlyWhenActive
            dataTourId="more-step-mobile"
            />
            <NavItem
            label="About"
            icon={<IconInfoCircle className="h-5 w-5" />}
            isActive={currentPage === Page.About}
            onClick={() => navigateTo(Page.About)}
            showLabelOnlyWhenActive
            />
            {!user && (
                 <button onClick={() => navigateTo(Page.Auth)} className="px-3 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 transition-colors text-xs">
                    Login
                </button>
            )}
        </div>
    </header>
  );
};

export default Header;