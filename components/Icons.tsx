import React from 'react';

type IconProps = {
    className?: string;
};

export const IconSparkles: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sparkles" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2" />
        <path d="M8 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2" />
        <path d="M12 2v2" />
        <path d="M12 12v2" />
        <path d="M12 6a6 6 0 0 1 6 6" />
        <path d="M12 6a6 6 0 0 0 -6 6" />
    </svg>
);

export const IconCalculator: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calculator" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <rect x="8" y="7" width="8" height="3" rx="1" />
        <line x1="8" y1="14" x2="8" y2="14.01" />
        <line x1="12" y1="14" x2="12" y2="14.01" />
        <line x1="16" y1="14" x2="16" y2="14.01" />
        <line x1="8" y1="17" x2="8" y2="17.01" />
        <line x1="12" y1="17" x2="12" y2="17.01" />
        <line x1="16" y1="17" x2="16" y2="17.01" />
    </svg>
);


export const IconTarget: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-target" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="9" />
    </svg>
);

export const IconChartPie: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-pie" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
    <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
  </svg>
);

export const IconLayoutDashboard: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4h6v8h-6z" />
    <path d="M4 16h6v4h-6z" />
    <path d="M14 12h6v8h-6z" />
    <path d="M14 4h6v4h-6z" />
  </svg>
);

export const IconBook: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
    <line x1="3" y1="6" x2="3" y2="19" />
    <line x1="12" y1="6" x2="12" y2="19" />
    <line x1="21" y1="6" x2="21" y2="19" />
  </svg>
);

export const IconBrandMessenger: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-messenger" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
    <path d="M8 13l3 -2l2 2l3 -2" />
  </svg>
);

export const IconSend: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="10" y1="14" x2="21" y2="3" />
    <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
  </svg>
);

export const IconX: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const IconChevronDown: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const IconInfoCircle: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
        <polyline points="11 12 12 12 12 16 13 16" />
    </svg>
);

export const IconUser: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
  </svg>
);

export const learnIcons: { [key: string]: React.FC<IconProps> } = {
  'What is SIP?': (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="4" y1="11" x2="20" y2="11" />
      <line x1="10" y1="16" x2="14" y2="16" />
      <line x1="12" y1="14" x2="12" y2="18" />
    </svg>
  ),
  'Understanding Risk': (props) => (
     <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-activity" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 12h4l3 8l4 -16l3 8h4" />
    </svg>
  ),
  'Asset Allocation': (props) => <IconChartPie {...props} />,
  'Mutual Funds 101': (props) => (
     <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </svg>
  ),
  'Tax Implications': (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-receipt-tax" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <line x1="9" y1="14" x2="15" y2="8" />
      <path d="M9.5 8h.01" />
      <path d="M14.5 14h.01" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
    </svg>
  ),
  'Time Value of Money': (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-hour-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12l3.5 2" />
      <path d="M12 7v5" />
    </svg>
  ),
  'Investment Strategies': (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <polyline points="8 16 10 10 16 8 14 14 8 16" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  'Red Flags to Watch': (props) => (
     <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flag-3" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
    </svg>
  ),
  'Important Disclaimer': (props) => <IconInfoCircle {...props} />,
};