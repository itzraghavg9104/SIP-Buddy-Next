import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Investment Plan Dashboard - View Your AI-Generated SIP Strategy | SIP Buddy',
    description: 'View your personalized AI-generated investment plan with detailed fund recommendations, asset allocation pie charts, 10-year growth projections, and fund comparison tools. Export your plan as PDF.',
    keywords: 'investment plan dashboard, SIP plan viewer, AI investment analysis, fund recommendations viewer, asset allocation charts, growth projection graphs, investment plan PDF export, fund comparison tool, SIP plan visualization',
    openGraph: {
        title: 'Your Investment Plan Dashboard',
        description: 'Visualize your AI-generated SIP plan with charts, fund details, growth projections, and export options.',
        url: 'https://sipbuddy.vercel.app/dashboard',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'SIP Buddy Dashboard',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Investment Plan Dashboard',
        description: 'View your personalized SIP plan with charts, projections, and fund recommendations.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
