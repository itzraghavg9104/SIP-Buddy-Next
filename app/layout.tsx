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
                url: 'https://res.cloudinary.com/dz5nzppe0/image/upload/v1762817912/image-removebg-preview_txrlqf.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI SIP Planner | Smart Mutual Fund & SIP Investment Plans',
        description: 'Get AI-powered, personalized SIP & mutual fund investment plans. Our smart planner analyzes your financial profile to provide top fund recommendations, growth projections, and a clear path to wealth creation.',
        images: ['https://res.cloudinary.com/dz5nzppe0/image/upload/v1762817912/image-removebg-preview_txrlqf.png'],
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
                {/* Multiple Favicon Sizes for Different Devices */}
                <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/dz5nzppe0/image/upload/v1762817912/image-removebg-preview_1_h863jz.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/dz5nzppe0/image/upload/v1762817912/image-removebg-preview_1_h863jz.png" />
                <link rel="icon" type="image/png" sizes="48x48" href="https://res.cloudinary.com/dz5nzppe0/image/upload/v1762817912/image-removebg-preview_1_h863jz.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="https://res.cloudinary.com/dz5nzppe0/image/upload/v1762817912/image-removebg-preview_1_h863jz.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="https://res.cloudinary.com/dz5nzppe0/image/upload/v1762817912/image-removebg-preview_1_h863jz.png" />

                {/* Apple Touch Icon for iOS */}
                <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/dz5nzppe0/image/upload/v1762817912/image-removebg-preview_1_h863jz.png" />

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
                                url: 'https://res.cloudinary.com/dz5nzppe0/image/upload/v1762817912/image-removebg-preview_1_h863jz.png',
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
            </body>
        </html>
    );
}
