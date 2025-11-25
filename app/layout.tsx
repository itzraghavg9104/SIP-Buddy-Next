import type { Metadata } from 'next';
import './globals.css';
import { GlobalProvider } from '../context/GlobalContext';
import ClientLayout from '../components/ClientLayout';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
    title: 'SIP Buddy | AI SIP Planner | Smart Mutual Fund & SIP Investment Plans',
    description: 'Get AI-powered, personalized SIP & mutual fund investment plans. Our smart planner analyzes your financial profile to provide top fund recommendations, growth projections, and a clear path to wealth creation.',
    keywords: 'SIP planner, AI investment advisor, mutual funds, systematic investment plan, financial planning, wealth management, investment calculator, India, stock market, SEBI',
    authors: [{ name: 'SIP Buddy' }],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://sipbuddy.vercel.app',
        title: 'AI SIP Planner | Smart Mutual Fund & SIP Investment Plans',
        description: 'Get AI-powered, personalized SIP & mutual fund investment plans. Our smart planner analyzes your financial profile to provide top fund recommendations, growth projections, and a clear path to wealth creation.',
        images: [
            {
                url: 'https://res.cloudinary.com/dz5nzppe0/image/upload/v1762520441/logoFull_wmoqob.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI SIP Planner | Smart Mutual Fund & SIP Investment Plans',
        description: 'Get AI-powered, personalized SIP & mutual fund investment plans. Our smart planner analyzes your financial profile to provide top fund recommendations, growth projections, and a clear path to wealth creation.',
        images: ['https://res.cloudinary.com/dz5nzppe0/image/upload/v1762520441/logoFull_wmoqob.png'],
    },
    verification: {
        google: 'rAAzIjmpK23zry0I96bgGY6d2jtjdDRuKsyloHFT4Gw',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" href="https://res.cloudinary.com/dz5nzppe0/image/upload/v1762817912/image-removebg-preview_1_h863jz.png" />
            </head>
            <body className="bg-slate-50 min-h-screen text-slate-800 font-sans">
                <GlobalProvider>
                    <ClientLayout>{children}</ClientLayout>
                </GlobalProvider>
                <Analytics />
            </body>
        </html>
    );
}
