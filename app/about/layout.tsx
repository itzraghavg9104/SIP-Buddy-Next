import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About SIP Buddy - AI-Powered Investment Planning Made Simple',
    description: 'Discover how SIP Buddy uses Google Gemini AI to create personalized mutual fund investment plans. Learn about our mission to democratize investment planning and help Indians build wealth through smart SIP strategies.',
    keywords: 'about SIP Buddy, AI investment platform, mutual fund planner, investment technology, robo advisor India, automated financial planning, SIP platform, wealth tech India',
    openGraph: {
        title: 'About SIP Buddy - Making Investment Planning Accessible',
        description: 'Learn how we use AI to help investors create personalized SIP plans and achieve their financial goals.',
        url: 'https://sipbuddy.vercel.app/about',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'About SIP Buddy',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About SIP Buddy',
        description: 'AI-powered investment planning for everyone.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
