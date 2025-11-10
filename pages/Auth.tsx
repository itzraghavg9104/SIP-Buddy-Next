import React, { useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider,
    updateProfile,
    getAdditionalUserInfo
} from 'firebase/auth';
import { auth } from '../services/firebase';
import { IconGoogle } from '../components/Icons';
import { logoIcon } from '../assets/logo';
import SafeImage from '../components/SafeImage';
import { createUserProfileDocument } from '../services/firestoreService';

interface AuthProps {
    // No props needed as App.tsx's onAuthStateChanged now handles navigation
}

const Auth: React.FC<AuthProps> = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAuthAction = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                // After user creation, set a default display name for a better profile experience
                if (user) {
                    const nameFromEmail = email.substring(0, email.indexOf('@'));
                    await updateProfile(user, { displayName: nameFromEmail });
                    // Create the user's profile document in Firestore
                    await createUserProfileDocument(user);
                }
            }
            // onAuthStateChanged in App.tsx will now handle the redirect automatically.
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

            // If it's a new user, create their profile document in Firestore
            if (additionalUserInfo?.isNewUser) {
                await createUserProfileDocument(result.user);
            }
            // onAuthStateChanged in App.tsx will handle the redirect automatically.
        } catch(err: any) {
             if (err.code === 'auth/account-exists-with-different-credential') {
                 setError('An account already exists with this email address. Please sign in with the original method you used.');
            } else {
                 setError(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="max-w-md mx-auto mt-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="text-center mb-6">
                    <SafeImage
                        src={logoIcon}
                        fallback={<div className="h-12 w-12 bg-slate-200 rounded-full mx-auto mb-2"></div>}
                        alt="SIP Buddy Icon"
                        className="h-12 w-12 mx-auto mb-2"
                    />
                    <h1 className="text-2xl font-bold text-slate-800">{isLogin ? 'Welcome Back!' : 'Create Your Account'}</h1>
                    <p className="text-slate-500 text-sm mt-1">{isLogin ? 'Sign in to access your dashboard.' : 'Join to start planning your investments.'}</p>
                </div>

                {error && <p className="bg-red-100 text-red-700 p-3 rounded-md text-sm mb-4">{error}</p>}

                <form onSubmit={handleAuthAction} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"className="block text-sm font-medium text-slate-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:bg-blue-300"
                    >
                        {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
                    </button>
                </form>

                <div className="my-6 flex items-center">
                    <div className="flex-grow border-t border-slate-300"></div>
                    <span className="flex-shrink mx-4 text-slate-400 text-sm">OR</span>
                    <div className="flex-grow border-t border-slate-300"></div>
                </div>

                <button
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    className="w-full flex justify-center items-center gap-3 py-3 px-4 bg-white text-slate-700 font-semibold rounded-lg shadow-sm border border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:bg-slate-100"
                >
                    <IconGoogle className="h-5 w-5" />
                    Sign in with Google
                </button>

                <p className="text-center text-sm text-slate-500 mt-6">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button onClick={() => setIsLogin(!isLogin)} className="font-semibold text-blue-600 hover:underline ml-1">
                        {isLogin ? 'Sign Up' : 'Sign In'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Auth;