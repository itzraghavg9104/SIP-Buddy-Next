import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Find Financial Advisor Near Me - Finance Buddy Locator | SIP Buddy',
    description: 'Find registered financial advisors near you with interactive map. Locate certified financial planners (CFP) and SEBI registered advisors in your area for investment guidance.',
    keywords: 'find financial advisor, advisor near me, CFP advisor search, SEBI registered advisor, finance buddy, financial planner locator, certified financial planner India, investment advisor search, wealth advisor near me',
    openGraph: {
        title: 'Find Financial Advisors Near You',
        description: 'Locate certified financial planners and SEBI registered advisors in your area with our interactive map.',
        url: 'https://sipbuddy.vercel.app/more/find-advisor',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'Find Financial Advisor',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Find Financial Advisors',
        description: 'Locate certified advisors near you with interactive map.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function FindAdvisorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
