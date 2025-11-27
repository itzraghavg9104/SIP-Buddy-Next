import React, { useState, useEffect, useRef } from 'react';
import { IconCalculator, IconBook, IconChartPie, IconMapPin, IconChevronDown, IconBrainCircuit, IconDeviceDesktop, IconTools, IconTrophy } from '../components/Icons';
import Footer from '../components/Footer';
import { useGlobalContext } from '../context/GlobalContext';
import { useRouter } from 'next/navigation';

const carouselFeatures = [
    { title: 'AI Planner', description: 'Personalized SIP strategy', icon: <IconChartPie className="h-10 w-10 mx-auto mb-4 text-blue-500" />, path: '/planner' },
    { title: 'Calculators', description: 'Project your wealth', icon: <IconCalculator className="h-10 w-10 mx-auto mb-4 text-purple-500" />, path: '/calculator' },
    { title: 'Knowledge Hub', description: 'Learn about investing', icon: <IconBook className="h-10 w-10 mx-auto mb-4 text-green-500" />, path: '/learn' },
    { title: 'Find an Advisor', description: 'Locate certified advisors', icon: <IconMapPin className="h-10 w-10 mx-auto mb-4 text-cyan-500" />, path: '/more', params: 'find-advisor' },
    { title: 'FinIQ Quiz', description: 'Test your financial IQ', icon: <IconTrophy className="h-10 w-10 mx-auto mb-4 text-indigo-500" />, path: '/more', params: 'finiq-challenge' },
];

const highlightFeatures = [
    { icon: <IconBrainCircuit className="h-10 w-10 text-blue-600" />, title: 'Intelligent AI Assistant', description: 'Our AI analyzes your financial profile to create a truly personalized and data-driven investment plan, removing the guesswork.' },
    { icon: <IconDeviceDesktop className="h-10 w-10 text-blue-600" />, title: 'Simple & Clean UI', description: 'Navigate your financial journey with ease. Our intuitive interface makes complex financial planning straightforward and stress-free.' },
    { icon: <IconTools className="h-10 w-10 text-blue-600" />, title: 'Comprehensive Tools', description: 'From advanced calculators to an advisor locator, we provide all the tools you need to make informed financial decisions.' },
    { icon: <IconTrophy className="h-10 w-10 text-blue-600" />, title: 'Gamified Learning', description: 'Test your knowledge with our FinIQ Challenge. Earn rewards and learn financial concepts in a fun, interactive way.' },
];

const faqs = [
    { q: 'What is SIP Buddy?', a: 'SIP Buddy is an AI-powered platform that simplifies investment planning. It provides personalized Systematic Investment Plan (SIP) strategies based on your financial goals and risk profile to help you build wealth systematically.' },
    { q: 'Is my data secure?', a: 'Yes, absolutely. We use industry-standard security measures and Firebase Authentication to ensure your data is safe and private. You are in complete control of your information.' },
    { q: 'Do I need to be an expert to use this?', a: 'Not at all! SIP Buddy is designed for everyone, from absolute beginners to seasoned investors. Our platform guides you through every step and our Knowledge Hub explains concepts in simple terms.' },
    { q: 'Is this financial advice?', a: 'SIP Buddy provides AI-generated suggestions for educational purposes to help you plan. It is not official financial advice. We always recommend consulting with a SEBI-registered financial advisor before making any investment decisions.' },
    { q: 'How does the AI Planner work?', a: 'Our AI analyzes your financial profile including income, risk tolerance, goals, and investment horizon to create a customized SIP strategy. It recommends specific mutual funds, asset allocation percentages, and provides year-by-year growth projections based on realistic market scenarios.' },
    { q: 'Can I save multiple investment plans?', a: 'Yes! You can create and save multiple plans for different financial goals. View and compare all your saved plans in the "My Plans" section. You can also export each plan as a PDF for your records.' },
    { q: 'What calculators are available?', a: 'We offer 4 powerful calculators: SIP Calculator (with step-up option), Lumpsum Investment Calculator, SWP Calculator for retirement planning, and Income Tax Calculator for FY 2024-25 with old vs new regime comparison.' },
    { q: 'How do I find a financial advisor?', a: 'Use our "Finance Buddy Near Me" tool in the More section. It uses an interactive map to help you locate SEBI-registered financial advisors and certified financial planners (CFP) in your area.' },
    { q: 'What is the FinIQ Challenge?', a: 'FinIQ Challenge is our gamified financial literacy quiz with 3 difficulty levels (Easy, Medium, Hard). Test your knowledge on mutual funds, SIP strategies, taxation, and personal finance while having fun!' },
    { q: 'Is SIP Buddy free to use?', a: 'Yes! SIP Buddy is completely free to use. You can create unlimited investment plans, use all calculators, access educational content, and explore all features without any charges.' },
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

const InteractiveCarousel: React.FC<{ navigateTo: (path: string, params?: any) => void }> = ({ navigateTo }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const currentRotation = useRef(0);
    const animationRef = useRef<number | null>(null);

    // Dynamic calculation based on number of items
    const itemCount = carouselFeatures.length;
    const theta = 360 / itemCount;
    // Calculate radius to ensure cards don't overlap. 
    // r = (w / 2) / tan(PI / n). Width is approx 280px. Added 40px buffer.
    const radius = Math.round((280 / 2) / Math.tan(Math.PI / itemCount)) + 40;

    // Animation Loop
    useEffect(() => {
        const animate = () => {
            if (!isDragging) {
                // Reverse direction (positive increment) and faster speed (0.6)
                currentRotation.current += 0.6;
                if (carouselRef.current) {
                    carouselRef.current.style.transform = `rotateY(${currentRotation.current}deg)`;
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isDragging]);

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        startX.current = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
        if (!isDragging) return;
        const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        const delta = x - startX.current;
        startX.current = x;

        // Apply manual rotation sensitivity
        currentRotation.current += delta * 0.5;
        if (carouselRef.current) {
            carouselRef.current.style.transform = `rotateY(${currentRotation.current}deg)`;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleMouseMove);
            window.addEventListener('touchend', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMouseMove);
            window.removeEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMouseMove);
            window.removeEventListener('touchend', handleMouseUp);
        }
    }, [isDragging]);


    return (
        <div className="scene"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
            <div className="carousel" ref={carouselRef}>
                {carouselFeatures.map((feature, index) => (
                    <div
                        key={index}
                        className="card border border-slate-200"
                        onClick={() => navigateTo(feature.path, (feature as any).params)}
                        style={{ transform: `rotateY(${index * theta}deg) translateZ(${radius}px)` }}
                    >
                        {feature.icon}
                        <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                        <p className="text-slate-500 mt-2 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Home: React.FC = () => {
    const { user } = useGlobalContext();
    const router = useRouter();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const navigateTo = (path: string, params?: any) => {
        if (params) {
            if (path === '/more') {
                router.push(`/more/${params}`);
            } else {
                router.push(`${path}/${params}`);
            }
        } else {
            router.push(path);
        }
    };

    const handleGetStarted = () => {
        if (user) {
            router.push('/planner');
        } else {
            router.push('/auth');
        }
    };

    return (
        <>
            <div className="container mx-auto px-4 py-8 md:py-16 overflow-hidden">
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                            Navigate Your Financial Future with <span className="text-blue-600">Confidence.</span>
                        </h1>
                        <p className="mt-6 text-lg text-slate-600 max-w-lg mx-auto lg:mx-0">
                            SIP Buddy is your AI-powered partner for smart investment planning. Get personalized strategies, discover top funds, and build a clear path to achieving your goals.
                        </p>
                        <button onClick={handleGetStarted} className="mt-8 px-6 py-3 text-base sm:mt-10 sm:px-8 sm:py-4 sm:text-lg bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                            Get Started for Free
                        </button>
                    </div>

                    <div className="relative h-[22rem] w-full flex items-center justify-center">
                        <InteractiveCarousel navigateTo={navigateTo} />
                    </div>
                </div>
            </div>

            {/* Feature Highlights Section */}
            <LazySection className="py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose SIP Buddy?</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">We combine cutting-edge technology with user-friendly design to make financial planning accessible and effective.</p>
                    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                            onClick={handleGetStarted}
                            className="mt-8 px-8 py-4 bg-gradient-to-b from-white to-slate-100 text-slate-800 font-bold text-lg rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            Create My Free Plan
                        </button>
                    </div>
                </div>
            </LazySection>

            <Footer />

            <style>{`
    .scene {
        perspective: 1000px;
        width: 280px;
        height: 300px;
        user-select: none;
    }
    .carousel {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
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
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        cursor: pointer;
        text-align: center;
        transition: box-shadow 0.3s ease;
    }
    .card:hover {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
`}</style>
        </>
    );
};

export default Home;