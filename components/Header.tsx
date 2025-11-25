import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { IconChartPie, IconLayoutDashboard, IconBook, IconSparkles, IconCalculator, IconInfoCircle, IconApps, IconUser, IconLogout, IconSettings, IconListDetails } from './Icons';
import { logoFull } from '../assets/logo';
import SafeImage from './SafeImage';
import { User } from 'firebase/auth';
import { useGlobalContext } from '../context/GlobalContext';
import { usePathname, useRouter } from 'next/navigation';


interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  showLabelOnlyWhenActive?: boolean;
  dataTourId?: string;
  responsive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  icon,
  isActive,
  onClick,
  showLabelOnlyWhenActive = false,
  dataTourId,
  responsive = false
}) => {
  // Determine padding and label visibility based on responsive mode
  let paddingClass = '';
  let labelClass = '';

  if (responsive) {
    // Desktop Top Bar Behavior:
    // MD screens (< 1024px): Icon Only, slightly wider touch targets (px-3)
    // LG screens (< 1280px): Icon Only, wider touch targets (px-5) to fill space
    // XL screens (>= 1280px): Icon + Label (expanded)
    paddingClass = 'px-3 py-2 lg:px-5 xl:px-4 xl:py-2';
    labelClass = 'hidden xl:inline ml-2';
  } else {
    // Mobile/Bottom Bar Behavior:
    // Shows label based on `showLabelOnlyWhenActive` prop or active state
    const showLabel = !showLabelOnlyWhenActive || isActive;
    paddingClass = showLabel ? 'px-4 py-2' : 'p-2';
    labelClass = showLabel ? 'ml-2' : 'hidden';
  }

  return (
    <button
      onClick={onClick}
      data-tour-id={dataTourId}
      title={responsive ? label : undefined} // Show tooltip in icon-only mode
      className={`flex items-center flex-shrink-0 rounded-md font-medium transition-colors whitespace-nowrap ${paddingClass} ${!showLabelOnlyWhenActive ? 'text-sm' : ''
        } ${isActive
          ? 'bg-white text-blue-600 shadow-sm'
          : 'text-slate-500 hover:bg-slate-100/50 hover:text-slate-700'
        } `}
    >
      {icon}
      <span className={labelClass}>{label}</span>
    </button>
  );
};

const ProfileDropdown: React.FC<{ user: User; onLogout: () => void; navigateTo: (path: string) => void; }> = ({ user, onLogout, navigateTo }) => {
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

  const handleNavigation = (path: string) => {
    navigateTo(path);
    setIsOpen(false);
  }

  return (
    <div className="relative flex-shrink-0" ref={dropdownRef}>
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
          <button onClick={() => handleNavigation('/my-plans')} className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
            <IconListDetails className="h-4 w-4" />
            <span>My Plans</span>
          </button>
          <button onClick={() => handleNavigation('/profile')} className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
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


const Header: React.FC = () => {
  const { user, handleLogout } = useGlobalContext();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on initial render
    } else {
      setIsScrolled(true); // Always have background on non-home pages
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const fallbackLogo = (
    <div className="flex items-center h-10">
      <IconSparkles className="h-7 w-7 text-blue-600" />
      <span className="text-xl font-bold ml-2 text-slate-800">SIP Buddy</span>
    </div>
  );

  const headerClass = `sticky top-0 z-40 transition-all duration-300 ${isScrolled || pathname !== '/'
      ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm'
      : 'bg-transparent border-b border-transparent'
    } `;

  // Logic for transparency of the nav items container
  const navContainerClass = pathname === '/'
    ? 'bg-white/30 backdrop-blur-md border border-white/40 shadow-sm'
    : 'bg-slate-100';

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <button onClick={() => navigateTo('/')} aria-label="Go to Homepage">
              <SafeImage
                src={logoFull}
                fallback={fallbackLogo}
                alt="SIP Buddy Logo"
                className="h-11"
              />
            </button>
          </div>

          {/* Desktop Navigation: Responsive (Icon only on md/lg, Label on xl) */}
          <div className={`hidden md:flex items-center space-x-2 p-1 rounded-lg flex-shrink overflow-x-auto no-scrollbar transition-colors ${navContainerClass}`}>
            <NavItem
              label="Planner"
              icon={<IconChartPie className="h-5 w-5" />}
              isActive={pathname === '/planner'}
              onClick={() => navigateTo('/planner')}
              dataTourId="planner-step"
              responsive={true}
            />
            {user && (
              <NavItem
                label="My Plans"
                icon={<IconListDetails className="h-5 w-5" />}
                isActive={pathname === '/my-plans'}
                onClick={() => navigateTo('/my-plans')}
                responsive={true}
              />
            )}
            <NavItem
              label="Dashboard"
              icon={<IconLayoutDashboard className="h-5 w-5" />}
              isActive={pathname === '/dashboard'}
              onClick={() => navigateTo('/dashboard')}
              dataTourId="dashboard-step"
              responsive={true}
            />
            <NavItem
              label="Learn"
              icon={<IconBook className="h-5 w-5" />}
              isActive={pathname === '/learn'}
              onClick={() => navigateTo('/learn')}
              dataTourId="learn-step"
              responsive={true}
            />
            <NavItem
              label="Calculator"
              icon={<IconCalculator className="h-5 w-5" />}
              isActive={pathname === '/calculator'}
              onClick={() => navigateTo('/calculator')}
              dataTourId="calculator-step"
              responsive={true}
            />
            <NavItem
              label="More"
              icon={<IconApps className="h-5 w-5" />}
              isActive={pathname === '/more'}
              onClick={() => navigateTo('/more')}
              dataTourId="more-step"
              responsive={true}
            />
            <NavItem
              label="About"
              icon={<IconInfoCircle className="h-5 w-5" />}
              isActive={pathname === '/about'}
              onClick={() => navigateTo('/about')}
              responsive={true}
            />
          </div>

          <div className="flex items-center flex-shrink-0">
            {user ? (
              <ProfileDropdown user={user} onLogout={handleLogout} navigateTo={navigateTo} />
            ) : (
              <button onClick={() => navigateTo('/auth')} className="hidden md:block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors text-sm whitespace-nowrap flex-shrink-0">
                <span>Login</span> <span className="hidden xl:inline">/ Sign Up</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-around bg-slate-100 p-1 m-2 rounded-lg text-xs overflow-x-auto no-scrollbar">
        <NavItem
          label="Planner"
          icon={<IconChartPie className="h-5 w-5" />}
          isActive={pathname === '/planner'}
          onClick={() => navigateTo('/planner')}
          showLabelOnlyWhenActive
          dataTourId="planner-step-mobile"
        />
        {user && (
          <NavItem
            label="My Plans"
            icon={<IconListDetails className="h-5 w-5" />}
            isActive={pathname === '/my-plans'}
            onClick={() => navigateTo('/my-plans')}
            showLabelOnlyWhenActive
          />
        )}
        <NavItem
          label="Dashboard"
          icon={<IconLayoutDashboard className="h-5 w-5" />}
          isActive={pathname === '/dashboard'}
          onClick={() => navigateTo('/dashboard')}
          showLabelOnlyWhenActive
          dataTourId="dashboard-step-mobile"
        />
        <NavItem
          label="Learn"
          icon={<IconBook className="h-5 w-5" />}
          isActive={pathname === '/learn'}
          onClick={() => navigateTo('/learn')}
          showLabelOnlyWhenActive
          dataTourId="learn-step-mobile"
        />
        <NavItem
          label="Calculator"
          icon={<IconCalculator className="h-5 w-5" />}
          isActive={pathname === '/calculator'}
          onClick={() => navigateTo('/calculator')}
          showLabelOnlyWhenActive
          dataTourId="calculator-step-mobile"
        />
        <NavItem
          label="More"
          icon={<IconApps className="h-5 w-5" />}
          isActive={pathname === '/more'}
          onClick={() => navigateTo('/more')}
          showLabelOnlyWhenActive
          dataTourId="more-step-mobile"
        />
        <NavItem
          label="About"
          icon={<IconInfoCircle className="h-5 w-5" />}
          isActive={pathname === '/about'}
          onClick={() => navigateTo('/about')}
          showLabelOnlyWhenActive
        />
        {!user && (
          <button onClick={() => navigateTo('/auth')} className="px-3 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 transition-colors text-xs whitespace-nowrap flex-shrink-0">
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;