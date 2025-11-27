import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Learn Investing - SIP, Mutual Funds & Finance Education | SIP Buddy',
    description: 'Learn about SIP, mutual funds, asset allocation, and tax-saving with interactive articles. Test your knowledge with FinIQ Challenge quiz featuring Easy, Medium, and Hard difficulty levels. Free financial education for Indian investors.',
    keywords: 'mutual fund tutorial, SIP learning, investment education India, financial literacy, FinIQ Challenge, investment quiz, ELSS funds guide, tax saving mutual funds, asset allocation guide, SIP strategy, mutual fund basics, personal finance education, learn investing India',
    openGraph: {
        title: 'Free Financial Education - Learn SIP & Mutual Fund Investing',
        description: 'Master investing with educational articles and FinIQ Challenge quiz. Learn SIP strategies, fund selection, and build financial knowledge.',
        url: 'https://sipbuddy.vercel.app/learn',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'SIP Buddy Learn',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Learn Investing with Interactive Quizzes',
        description: 'Free financial education with articles and FinIQ Challenge quiz on SIP and mutual funds.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function LearnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
