import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Additional Tools - Find Advisors & FinIQ Quiz | SIP Buddy',
    description: 'Explore additional financial tools: Finance Buddy Near Me to find registered financial advisors using interactive map, and FinIQ Challenge to test your investment knowledge with AI-powered quiz game.',
    keywords: 'find financial advisor, advisor locator India, finance buddy near me, FinIQ Challenge, financial quiz game, investment knowledge test, CFP advisor search, SEBI registered advisor, financial planner locator',
    openGraph: {
        title: 'Additional Financial Tools',
        description: 'Find financial advisors near you and test your investment knowledge with FinIQ quiz.',
        url: 'https://sipbuddy.vercel.app/more',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'SIP Buddy Tools',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'More Financial Tools',
        description: 'Find advisors and test your financial knowledge.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function MoreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
