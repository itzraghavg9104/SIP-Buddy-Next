import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { IconCalculator, IconBook, IconChartPie, IconMapPin, IconChevronDown, IconBrainCircuit, IconDeviceDesktop, IconTools } from '../components/Icons';
import Footer from '../components/Footer';

interface HomeProps {
    onGetStartedClick: () => void;
    navigateTo: (page: Page) => void;
}

const carouselFeatures = [
    { title: 'AI Planner', description: 'Personalized SIP strategy', icon: <IconChartPie className="h-10 w-10 mx-auto mb-4 text-blue-500" />, page: Page.Planner },
    { title: 'Calculators', description: 'Project your wealth', icon: <IconCalculator className="h-10 w-10 mx-auto mb-4 text-purple-500" />, page: Page.Calculator },
    { title: 'Knowledge Hub', description: 'Learn about investing', icon: <IconBook className="h-10 w-10 mx-auto mb-4 text-green-500" />, page: Page.Learn },
    { title: 'Find an Advisor', description: 'Locate certified advisors', icon: <IconMapPin className="h-10 w-10 mx-auto mb-4 text-cyan-500" />, page: Page.More },
];

const highlightFeatures = [
    { icon: <IconBrainCircuit className="h-10 w-10 text-blue-600" />, title: 'Intelligent AI Assistant', description: 'Our AI analyzes your financial profile to create a truly personalized and data-driven investment plan, removing the guesswork.' },
    { icon: <IconDeviceDesktop className="h-10 w-10 text-blue-600" />, title: 'Simple & Clean UI', description: 'Navigate your financial journey with ease. Our intuitive interface makes complex financial planning straightforward and stress-free.' },
    { icon: <IconTools className="h-10 w-10 text-blue-600" />, title: 'Comprehensive Tools', description: 'From advanced calculators to an advisor locator, we provide all the tools you need to make informed financial decisions.' },
];

const faqs = [
    { q: 'What is SIP Buddy?', a: 'SIP Buddy is an AI-powered platform that simplifies investment planning. It provides personalized Systematic Investment Plan (SIP) strategies based on your financial goals and risk profile to help you build wealth systematically.' },
    { q: 'Is my data secure?', a: 'Yes, absolutely. We use industry-standard security measures and Firebase Authentication to ensure your data is safe and private. You are in complete control of your information.' },
    { q: 'Do I need to be an expert to use this?', a: 'Not at all! SIP Buddy is designed for everyone, from absolute beginners to seasoned investors. Our platform guides you through every step and our Knowledge Hub explains concepts in simple terms.' },
    { q: 'Is this financial advice?', a: 'SIP Buddy provides AI-generated suggestions for educational purposes to help you plan. It is not official financial advice. We always recommend consulting with a SEBI-registered financial advisor before making any investment decisions.' },
];

const LazySection: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`transition-all duration-700 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {children}
        </div>
    );
};


const Home: React.FC<HomeProps> = ({ onGetStartedClick, navigateTo }) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            <div className="container mx-auto px-4 py-8 md:py-16 overflow-hidden">
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                            Navigate Your Financial Future with <span className="text-blue-600">Confidence.</span>
                        </h1>
                        <p className="mt-6 text-lg text-slate-600 max-w-lg mx-auto lg:mx-0">
                            SIP Buddy is your AI-powered partner for smart investment planning. Get personalized strategies, discover top funds, and build a clear path to achieving your goals.
                        </p>
                        <button onClick={onGetStartedClick} className="mt-10 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                            Get Started for Free
                        </button>
                    </div>
                    
                    <div className="relative h-[22rem] w-full flex items-center justify-center">
                        <div className="scene">
                            <div className="carousel">
                                {carouselFeatures.map((feature, index) => (
                                    <div key={index} className="card border border-slate-200" onClick={() => navigateTo(feature.page)} style={{ transform: `rotateY(${index * 90}deg) translateZ(170px)` }}>
                                        {feature.icon}
                                        <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                                        <p className="text-slate-500 mt-2 text-sm">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Highlights Section */}
            <LazySection className="py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose SIP Buddy?</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">We combine cutting-edge technology with user-friendly design to make financial planning accessible and effective.</p>
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        {highlightFeatures.map(feature => (
                            <div key={feature.title} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                                <div className="inline-block bg-blue-100 p-4 rounded-full">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-slate-800 mt-5">{feature.title}</h3>
                                <p className="text-slate-500 mt-2">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </LazySection>

            {/* FAQ Section */}
            <LazySection className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
                    <div className="mt-10 space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md border border-slate-200">
                                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between items-center p-5 text-left">
                                    <h3 className="font-semibold text-lg text-slate-800">{faq.q}</h3>
                                    <IconChevronDown className={`w-6 h-6 text-slate-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === index && (
                                    <div className="px-5 pb-5 border-t border-slate-200 pt-4">
                                        <p className="text-slate-600">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </LazySection>

            {/* Final CTA Section */}
            <LazySection className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-16 text-center shadow-2xl max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Take Control of Your Finances?</h2>
                        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">Create your free account today and get your personalized AI-powered investment plan in minutes.</p>
                        <button
                            onClick={onGetStartedClick}
                            className="mt-8 px-8 py-4 bg-gradient-to-b from-white to-slate-100 text-slate-800 font-bold text-lg rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            Create My Free Plan
                        </button>
                    </div>
                </div>
            </LazySection>
            
            <Footer navigateTo={navigateTo} />

            <style>{`
                .scene {
                    perspective: 1000px;
                    width: 280px;
                    height: 300px;
                }
                .carousel {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    transform-style: preserve-3d;
                    animation: rotate 30s linear infinite;
                }
                .carousel:hover {
                    animation-play-state: paused;
                }
                @keyframes rotate {
                    from { transform: rotateY(0deg); }
                    to { transform: rotateY(360deg); }
                }
                .card {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 24px;
                    background-color: white;
                    border-radius: 1.5rem;
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
                    cursor: pointer;
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-8px) scale(1.05);
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
                }
            `}</style>
        </>
    );
};

export default Home;