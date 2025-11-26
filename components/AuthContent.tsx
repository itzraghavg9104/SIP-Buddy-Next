import React, { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
    getAdditionalUserInfo,
    sendEmailVerification,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../services/firebase';
import { IconGoogle, IconSparkles } from '../components/Icons';
import { logoIcon } from '../assets/logo';
import SafeImage from '../components/SafeImage';
import { createUserProfileDocument } from '../services/firestoreService';
import { useGlobalContext } from '../context/GlobalContext';
import { useRouter } from 'next/navigation';

const Auth: React.FC = () => {
    const { user } = useGlobalContext();
    const router = useRouter();

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState('');

    useEffect(() => {
        if (user) {
            router.push('/dashboard');
        }
    }, [user, router]);

    const handleAuthAction = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const newUser = userCredential.user;
                // After user creation, set a default display name for a better profile experience
                if (newUser) {
                    const nameFromEmail = email.substring(0, email.indexOf('@'));
                    await updateProfile(newUser, { displayName: nameFromEmail });
                    // Create the user's profile document in Firestore with email provider
                    await createUserProfileDocument(newUser, 'email');
                    // Send email verification
                    await sendEmailVerification(newUser);
                    setSuccessMessage('Account created! Please check your email to verify your account.');
                }
            }
            // Redirect handled by useEffect
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const additionalUserInfo = getAdditionalUserInfo(result);

            // If it's a new user, create their profile document in Firestore with google provider
            if (additionalUserInfo?.isNewUser) {
                await createUserProfileDocument(result.user, 'google');
            }
            // Redirect handled by useEffect
        } catch (err: any) {
            if (err.code === 'auth/account-exists-with-different-credential') {
                setError('An account already exists with this email address. Please sign in with the original method you used.');
            } else {
                setError(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    }

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            await sendPasswordResetEmail(auth, resetEmail);
            setSuccessMessage('Password reset email sent! Please check your inbox.');
            setShowForgotPassword(false);
            setResetEmail('');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 -z-10">
                {/* Base Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

                {/* Subtle Financial Grid Pattern */}
                <svg className="absolute inset-0 h-full w-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                            <path d="M0 50L50 0H25L0 25M50 50V25L25 50" stroke="#94a3b8" strokeWidth="0.5" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>

                {/* Soft Animated Blobs for Depth */}
                <div className="absolute top-[10%] left-[15%] w-[30rem] h-[30rem] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
                <div className="absolute bottom-[10%] right-[15%] w-[30rem] h-[30rem] bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] right-[30%] w-[20rem] h-[20rem] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
            </div>

            {/* 3D Card Container */}
            <div className="relative w-full max-w-md group perspective-1000">

                {/* Rotating Glowing Border Layer */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-border-spin"></div>

                {/* Main Card Content */}
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl ring-1 ring-gray-900/5 leading-none flex flex-col space-y-6 z-10 backdrop-blur-sm bg-white/95">

                    {/* Header */}
                    <div className="text-center">
                        <div className="relative inline-block">
                            {/* Glow removed as requested */}
                            <SafeImage
                                src={logoIcon}
                                fallback={<div className="h-16 w-16 bg-slate-200 rounded-full mx-auto mb-2 flex items-center justify-center"><IconSparkles className="h-8 w-8 text-blue-600" /></div>}
                                alt="SIP Buddy Icon"
                                className="relative h-16 w-16 mx-auto mb-4 drop-shadow-lg"
                            />
                        </div>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                            {isLogin ? 'Welcome Back' : 'Start Your Journey'}
                        </h2>
                        <p className="mt-2 text-sm text-slate-500 font-medium">
                            {isLogin ? 'Access your financial dashboard' : 'Create your personalized investment plan'}
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-red-700">{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {successMessage && (
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-green-700">{successMessage}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleAuthAction} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="you@example.com"
                                className="block w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out shadow-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                placeholder="••••••••"
                                className="block w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out shadow-sm"
                            />
                            {isLogin && (
                                <div className="text-right mt-1">
                                    <button
                                        type="button"
                                        onClick={() => setShowForgotPassword(true)}
                                        className="text-sm text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transform transition hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading && (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            )}
                            {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-slate-500">Or continue with</span>
                        </div>
                    </div>

                    <button
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                        className="w-full flex justify-center items-center gap-3 py-3 px-4 bg-white text-slate-700 font-semibold rounded-lg shadow-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:bg-slate-100 disabled:text-slate-400"
                    >
                        <IconGoogle className="h-5 w-5" />
                        <span>Sign in with Google</span>
                    </button>

                    <div className="text-center pt-2">
                        <p className="text-sm text-slate-600">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="ml-2 font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200 underline-offset-4 hover:underline focus:outline-none"
                            >
                                {isLogin ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            {/* Forgot Password Modal */}
            {showForgotPassword && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Reset Password</h3>
                        <p className="text-sm text-slate-600 mb-6">Enter your email address and we'll send you a link to reset your password.</p>
                        <form onSubmit={handleForgotPassword}>
                            <div className="mb-4">
                                <label htmlFor="resetEmail" className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="resetEmail"
                                    value={resetEmail}
                                    onChange={(e) => setResetEmail(e.target.value)}
                                    required
                                    placeholder="you@example.com"
                                    className="block w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowForgotPassword(false);
                                        setResetEmail('');
                                        setError(null);
                                    }}
                                    className="flex-1 py-2.5 px-4 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex-1 py-2.5 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes border-spin {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-border-spin {
                    background-size: 200% 200%;
                    animation: border-spin 3s ease infinite;
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};

export default Auth;
