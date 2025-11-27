import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Financial Calculators - SIP, Lumpsum, SWP & Tax Calculator | SIP Buddy',
    description: 'Free investment calculators: SIP calculator with step-up, Lumpsum investment calculator, SWP (Systematic Withdrawal Plan) calculator, and Income Tax calculator for FY 2024-25. Get accurate projections and plan your investments.',
    keywords: 'SIP calculator India, lumpsum calculator, SWP calculator, systematic withdrawal plan, income tax calculator 2024-25, investment calculator, mutual fund calculator, SIP returns calculator, retirement calculator, step up SIP calculator, old vs new tax regime, tax planning calculator',
    openGraph: {
        title: 'Free Financial Calculators - SIP, Lumpsum, SWP & Tax',
        description: 'Calculate SIP returns, lumpsum growth, systematic withdrawals, and income tax with our comprehensive free tools.',
        url: 'https://sipbuddy.vercel.app/calculator',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'SIP Buddy Calculators',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Investment & Tax Calculators',
        description: 'SIP, Lumpsum, SWP & Tax calculators with detailed projections and scenarios.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function CalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
