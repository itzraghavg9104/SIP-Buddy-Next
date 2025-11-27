import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Profile Settings - Manage Your Account | SIP Buddy',
    description: 'Update your profile information, change password, manage email verification, and customize your SIP Buddy account settings. Secure and easy account management.',
    keywords: 'profile settings, account management, user profile, change password, account security, profile update',
    openGraph: {
        title: 'Profile Settings - SIP Buddy',
        description: 'Manage your account settings and preferences.',
        url: 'https://sipbuddy.vercel.app/profile',
        type: 'website',
        images: [
            {
                url: 'https://sipbuddy.vercel.app/logoFull.png',
                width: 1200,
                height: 630,
                alt: 'SIP Buddy Profile',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Account Settings',
        description: 'Manage your SIP Buddy profile and preferences.',
        images: ['https://sipbuddy.vercel.app/logoFull.png'],
    },
};

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
