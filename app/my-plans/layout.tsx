import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Saved Plans - View & Manage Your Investment Strategies | SIP Buddy',
    description: 'Access all your saved SIP investment plans. View plan details, check fund recommendations, review growth projections, and delete old strategies. Easily switch between multiple saved plans.',
    keywords: 'saved SIP plans, my investment plans, plan management, view saved plans, delete investment strategy, SIP plan history, manage saved strategies',
    openGraph: {
        title: 'My Saved Investment Plans',
        description: 'View, manage, and switch between your saved SIP investment strategies.',
        url: 'https://sipbuddy.vercel.app/my-plans',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'My SIP Plans',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Manage Your Saved Plans',
        description: 'View and manage all your saved SIP investment strategies.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function MyPlansLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
