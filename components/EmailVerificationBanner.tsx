'use client';

import React, { useState } from 'react';
import { auth } from '../services/firebase';
import { sendEmailVerification } from 'firebase/auth';
import { recordVerificationEmailSent } from '../services/firestoreService';

const EmailVerificationBanner: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [isDismissed, setIsDismissed] = useState(false);

    const handleResendVerification = async () => {
        const user = auth.currentUser;
        if (!user) return;

        setIsLoading(true);
        setMessage(null);

        try {
            await sendEmailVerification(user);
            await recordVerificationEmailSent(user.uid);
            setMessage('Verification email sent! Please check your inbox.');
            setTimeout(() => setMessage(null), 5000);
        } catch (error: any) {
            setMessage(error.message || 'Failed to send verification email.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isDismissed) return null;

    return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-md">
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="ml-3 flex-1">
                    <h3 className="text-sm font-semibold text-yellow-800">Email Verification Required</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                        <p>Please verify your email address to access all features. Check your inbox for the verification link.</p>
                        {message && (
                            <p className={`mt-2 font-medium ${message.includes('sent') ? 'text-green-700' : 'text-red-700'}`}>
                                {message}
                            </p>
                        )}
                    </div>
                    < div className="mt-4 flex gap-3">
                        <button
                            onClick={handleResendVerification}
                            disabled={isLoading}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-yellow-800 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Resend Verification Email'
                            )}
                        </button>
                        <button
                            onClick={() => setIsDismissed(true)}
                            className="text-sm text-yellow-700 hover:text-yellow-900 font-medium transition-colors"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailVerificationBanner;
