import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SIP Calculator - Calculate Mutual Fund Returns with Step-Up | SIP Buddy',
    description: 'Free SIP calculator with annual step-up option. Calculate returns on monthly SIP investments in mutual funds. See growth projections with conservative, expected, and aggressive scenarios.',
    keywords: 'SIP calculator, systematic investment plan calculator, SIP returns calculator, step up SIP, mutual fund SIP calculator, monthly investment calculator, SIP growth calculator India, SIP planning tool',
    openGraph: {
        title: 'SIP Calculator - Calculate Your Investment Returns',
        description: 'Free SIP calculator with step-up. Plan your monthly investments and see realistic growth projections.',
        url: 'https://sipbuddy.vercel.app/calculator/sip',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'SIP Calculator',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SIP Calculator with Step-Up',
        description: 'Calculate SIP returns with annual step-up option and multiple scenarios.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function SIPCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
