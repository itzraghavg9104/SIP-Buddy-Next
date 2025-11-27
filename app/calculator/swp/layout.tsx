import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SWP Calculator - Systematic Withdrawal Plan Calculator | SIP Buddy',
    description: 'Free SWP calculator for retirement planning. Calculate how long your corpus will last with monthly withdrawals. Plan systematic withdrawals from mutual funds with realistic projections.',
    keywords: 'SWP calculator, systematic withdrawal plan, retirement calculator, withdrawal calculator, corpus calculator, pension calculator, monthly income calculator India, retirement planning tool',
    openGraph: {
        title: 'SWP Calculator - Plan Your Retirement Withdrawals',
        description: 'Calculate how long your corpus lasts with monthly withdrawals. Plan your retirement income.',
        url: 'https://sipbuddy.vercel.app/calculator/swp',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'SWP Calculator',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SWP Calculator - Retirement Planning',
        description: 'Plan systematic withdrawals and estimate corpus depletion.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function SWPCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
