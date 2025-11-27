import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FinIQ Challenge - Test Your Financial Knowledge Quiz | SIP Buddy',
    description: 'Test your investment knowledge with FinIQ Challenge. AI-powered financial quiz game with dynamic questions on mutual funds, SIP, stocks, and personal finance. Three difficulty levels: Easy, Medium, Hard.',
    keywords: 'financial quiz, FinIQ challenge, investment knowledge test, finance quiz game, money quiz, financial literacy test, investment IQ test, mutual fund quiz, personal finance quiz India',
    openGraph: {
        title: 'FinIQ Challenge - Financial Knowledge Quiz',
        description: 'Test your investment IQ with AI-powered quiz. Multiple difficulty levels and dynamic questions.',
        url: 'https://sipbuddy.vercel.app/more/finiq-challenge',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'FinIQ Challenge',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FinIQ Challenge Quiz',
        description: 'Test your financial knowledge with dynamic questions.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function FinIQChallengeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
