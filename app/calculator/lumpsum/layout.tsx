import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lumpsum Calculator - Calculate One-Time Investment Returns | SIP Buddy',
    description: 'Free lumpsum investment calculator. Project growth of one-time mutual fund investments with realistic market scenarios. Plan your wealth with accurate compound interest projections.',
    keywords: 'lumpsum calculator, one time investment calculator, lumpsum returns, mutual fund lumpsum, investment growth calculator, compound interest calculator, lumpsum mutual fund calculator India',
    openGraph: {
        title: 'Lumpsum Calculator - One-Time Investment Growth',
        description: 'Calculate returns on lumpsum investments with multiple market scenarios.',
        url: 'https://sipbuddy.vercel.app/calculator/lumpsum',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'Lumpsum Calculator',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lumpsum Investment Calculator',
        description: 'Calculate one-time investment returns with compound growth.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function LumpsumCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
