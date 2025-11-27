import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login & Sign Up - Start Your Investment Journey | SIP Buddy',
    description: 'Create your free SIP Buddy account to access AI-powered investment planning, save your SIP plans, and get personalized mutual fund recommendations. Sign up with email or Google in seconds.',
    keywords: 'SIP Buddy login, investment account, sign up, create account, register, investment app login, mutual fund platform',
    openGraph: {
        title: 'Join SIP Buddy - Start Investing Smarter',
        description: 'Create your free account and get AI-powered investment recommendations.',
        url: 'https://sipbuddy.vercel.app/auth',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'SIP Buddy Login',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Join SIP Buddy',
        description: 'Create your account and start building wealth with AI-powered planning.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
