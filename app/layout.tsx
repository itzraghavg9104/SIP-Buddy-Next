import type { Metadata } from 'next';
import './globals.css';
import { GlobalProvider } from '../context/GlobalContext';
import ClientLayout from '../components/ClientLayout';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    title: 'SIP Buddy | AI SIP Planner | Smart Mutual Fund & SIP Investment Plans',
    description: 'Get AI-powered, personalized SIP & mutual fund investment plans. Our smart planner analyzes your financial profile to provide top fund recommendations, growth projections, and a clear path to wealth creation.',
    keywords: 'SIP planner, AI investment advisor, mutual funds, systematic investment plan, SIP calculator, wealth management, investment calculator, India, lumpsum calculator, SWP calculator, tax saving mutual funds, ELSS, mutual fund portfolio, robo advisor, personal finance India, best mutual funds 2025, direct mutual funds, large cap funds, mid cap funds, small cap funds, index funds, goal based investing, SIP Buddy, ai mutual fund recommender, financial planning',
    authors: [{ name: 'SIP Buddy' }],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://sipbuddy.vercel.app',
        title: 'AI SIP Planner | Smart Mutual Fund & SIP Investment Plans',
        description: 'Get AI-powered, personalized SIP & mutual fund investment plans. Our smart planner analyzes your financial profile to provide top fund recommendations, growth projections, and a clear path to wealth creation.',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI SIP Planner | Smart Mutual Fund & SIP Investment Plans',
        description: 'Get AI-powered, personalized SIP & mutual fund investment plans. Our smart planner analyzes your financial profile to provide top fund recommendations, growth projections, and a clear path to wealth creation.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
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
                {/* Multiple Favicon Sizes for Different Devices - Using Local Files for PWA Support */}
                <link rel="icon" type="image/png" sizes="16x16" href="/logoIcon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/logoIcon.png" />
                <link rel="icon" type="image/png" sizes="48x48" href="/logoIcon.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/logoIcon.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/logoIcon.png" />

                {/* Apple Touch Icon for iOS - Using Local File */}
                <link rel="apple-touch-icon" sizes="180x180" href="/logoIcon.png" />

                {/* Web App Manifest */}
                <link rel="manifest" href="/manifest.json" />

                {/* Theme Color for Mobile Browsers */}
                <meta name="theme-color" content="#3b82f6" />

                {/* JSON-LD Structured Data for Google Search */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'SIP Buddy',
                            url: 'https://sipbuddy.vercel.app',
                            logo: {
                                '@type': 'ImageObject',
                                url: 'https://sipbuddy.vercel.app/logoIcon.png',
                                width: 512,
                                height: 512
                            },
                            description: 'AI-powered personalized SIP and mutual fund investment planning platform',
                            sameAs: [
                                'https://sipbuddy.vercel.app'
                            ]
                        })
                    }}
                />
            </head>
            <body className="bg-slate-50 min-h-screen text-slate-800 font-sans">
                <GlobalProvider>
                    <ClientLayout>{children}</ClientLayout>
                </GlobalProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
