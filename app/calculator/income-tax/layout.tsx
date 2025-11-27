import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Income Tax Calculator FY 2024-25 - Old vs New Regime Comparison | SIP Buddy',
    description: 'Free income tax calculator for FY 2024-25. Compare old vs new tax regime. Calculate tax liability, deductions under 80C, 80D, and find which regime saves you more money.',
    keywords: 'income tax calculator 2024-25, old vs new tax regime, tax calculator India, FY 2024-25 tax, tax planning calculator, tax saving calculator, income tax comparison, 80C 80D deductions, tax regime calculator',
    openGraph: {
        title: 'Income Tax Calculator FY 2024-25 - Compare Regimes',
        description: 'Calculate tax liability and compare old vs new tax regime. Find the best option for you.',
        url: 'https://sipbuddy.vercel.app/calculator/income-tax',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'Income Tax Calculator',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Income Tax Calculator 2024-25',
        description: 'Compare old vs new tax regime and calculate your tax liability.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function IncomeTaxCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
