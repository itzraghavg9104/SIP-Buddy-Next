import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { IconArrowUp, IconMail, IconSparkles } from './Icons';
import { logoFull } from '../assets/logo';
import SafeImage from './SafeImage';
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const fallbackLogo = (
        <div className="flex items-center">
            <IconSparkles className="h-7 w-7 text-blue-600" />
            <span className="text-xl font-bold ml-2 text-slate-800">SIP Buddy</span>
        </div>
    );

    const navigateTo = (path: string, params?: string) => {
        if (params) {
            // Check if path is calculator or more to decide param name
            if (path === '/calculator') {
                router.push(`${path}?active=${params}`);
            } else if (path === '/more') {
                router.push(`${path}?tool=${params}`);
            } else {
                router.push(`${path}?${params}`);
            }
        } else {
            router.push(path);
        }
    };


    return (
        <footer className="bg-white text-slate-600">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <button onClick={() => navigateTo('/')} aria-label="Go to Homepage">
                            <SafeImage
                                src={logoFull}
                                fallback={fallbackLogo}
                                alt="SIP Buddy Logo"
                                className="h-10 mb-4"
                            />
                        </button>
                        <p className="text-sm text-slate-500">AI-powered investment planning for everyone. Build a smarter financial future with confidence.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><button onClick={() => navigateTo('/')} className="hover:text-blue-600 transition-colors">Home</button></li>
                            <li><button onClick={() => navigateTo('/planner')} className="hover:text-blue-600 transition-colors">Planner</button></li>
                            <li><button onClick={() => navigateTo('/learn')} className="hover:text-blue-600 transition-colors">Learn</button></li>
                            <li><button onClick={() => navigateTo('/about')} className="hover:text-blue-600 transition-colors">About</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">
                            <button onClick={() => navigateTo('/calculator')} className="hover:text-blue-600 transition-colors text-left">Calculators</button>
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><button onClick={() => navigateTo('/calculator', 'sip')} className="hover:text-blue-600 transition-colors text-left">SIP Calculator</button></li>
                            <li><button onClick={() => navigateTo('/calculator', 'swp')} className="hover:text-blue-600 transition-colors text-left">SWP Calculator</button></li>
                            <li><button onClick={() => navigateTo('/calculator', 'lumpsum')} className="hover:text-blue-600 transition-colors text-left">Lumpsum Calculator</button></li>
                            <li><button onClick={() => navigateTo('/calculator', 'tax')} className="hover:text-blue-600 transition-colors text-left">Income Tax Calculator</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">
                            <button onClick={() => navigateTo('/more')} className="hover:text-blue-600 transition-colors text-left">More Tools</button>
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><button onClick={() => navigateTo('/more', 'find-advisor')} className="hover:text-blue-600 transition-colors text-left">Find an Advisor</button></li>
                            <li><button onClick={() => navigateTo('/more', 'finiq-challenge')} className="hover:text-blue-600 transition-colors text-left">FinIQ Challenge</button></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-12 border-t border-slate-200">
                    <div className="bg-blue-50 rounded-2xl p-8 grid md:grid-cols-2 items-center gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="font-bold text-xl md:text-2xl text-slate-900">Have Feedback or Suggestions?</h3>
                            <p className="mt-2 text-slate-600">We are constantly working to improve SIP Buddy and would love to hear from you!</p>
                        </div>
                        <div className="text-center md:text-right">
                            <a
                                href="mailto:contact.sipbuddy@gmail.com"
                                className="inline-flex items-center gap-2 py-3 px-6 bg-slate-800 text-white font-semibold rounded-lg shadow-md hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
                            >
                                <IconMail className="w-5 h-5" />
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} SIP Buddy. All rights reserved.</p>
                    <p className="mt-2">Disclaimer: For educational purposes only. Consult a financial advisor before investing.</p>
                </div>
            </div>

            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110 z-50 border-2 border-white"
                    aria-label="Go to top"
                >
                    <IconArrowUp className="h-6 w-6" />
                </button>
            )}
        </footer>
    );
};

export default Footer;