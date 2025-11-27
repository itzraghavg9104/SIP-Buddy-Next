import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Investment Planner - Get Personalized SIP Plans in Minutes | SIP Buddy',
    description: 'Create your personalized SIP investment plan with AI. Get custom mutual fund recommendations, asset allocation strategies, and growth projections tailored to your financial goals and risk profile.',
    keywords: 'AI investment planner, personalized SIP plan, mutual fund recommendations, asset allocation, SIP strategy, robo advisor India, automated investment planner, custom SIP portfolio, wealth planning tool, investment advisor AI',
    openGraph: {
        title: 'AI-Powered Investment Planning - Create Your Custom SIP Strategy',
        description: 'Let AI create a personalized investment plan for you. Get expert fund recommendations, risk-adjusted portfolios, and realistic growth projections.',
        url: 'https://sipbuddy.vercel.app/planner',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'SIP Buddy AI Planner',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Create Your AI-Powered Investment Plan',
        description: 'Personalized SIP strategies and mutual fund recommendations in minutes with AI.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function PlannerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
