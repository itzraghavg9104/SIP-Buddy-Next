
import React from 'react';
import { Page } from '../types';
import { IconSparkles, IconLayoutDashboard, IconBook, IconCalculator, IconBrainCircuit, IconMapPin } from '../components/Icons';
import { logoFull } from '../assets/logo';
import SafeImage from '../components/SafeImage';
import Footer from '../components/Footer';

interface AboutProps {
    navigateTo: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ navigateTo }) => {
    const features = [
        {
            icon: <IconSparkles className="h-8 w-8 text-blue-600" />,
            title: 'AI-Powered Planner',
            description: 'Get a personalized SIP investment plan based on your unique financial profile, risk tolerance, and goals.'
        },
        {
            icon: <IconLayoutDashboard className="h-8 w-8 text-green-600" />,
            title: 'Interactive Dashboard',
            description: 'Visualize projections, compare mutual funds, save your plans, and export detailed reports as PDFs.'
        },
        {
            icon: <IconBrainCircuit className="h-8 w-8 text-purple-600" />,
            title: 'Smart AI Assistant',
            description: 'Chat with SIP Buddy using voice or text. Get instant answers to your financial queries powered by advanced AI.'
        },
        {
            icon: <IconCalculator className="h-8 w-8 text-orange-600" />,
            title: 'Comprehensive Calculators',
            description: 'Plan for every scenario with our advanced SIP, SWP, Lumpsum, and new Income Tax calculators.'
        },
        {
            icon: <IconMapPin className="h-8 w-8 text-cyan-600" />,
            title: 'Advisor Locator',
            description: 'Need professional help? Find registered financial advisors near your location with our integrated map tool.'
        },
        {
            icon: <IconBook className="h-8 w-8 text-indigo-600" />,
            title: 'Learning Center',
            description: 'Empower yourself with knowledge. Our learn section breaks down complex investment topics into simple concepts.'
        }
    ];
    
    const fallbackLogo = (
        <div className="flex items-center justify-center h-20 mx-auto mb-4">
            <IconSparkles className="h-12 w-12 text-blue-600" />
            <span className="text-4xl font-bold ml-3 text-slate-800">SIP Buddy</span>
        </div>
    );


    return (
        <>
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="text-center mb-12">
                    <SafeImage
                        src={logoFull}
                        fallback={fallbackLogo}
                        alt="SIP Buddy Logo"
                        className="h-14 sm:h-16 mx-auto mb-6"
                    />
                    <p className="text-lg text-slate-600">
                        Your intelligent partner in simplifying Systematic Investment Plans.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 mb-12">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">What is SIP Buddy?</h2>
                    <p className="text-slate-600 leading-relaxed">
                        SIP Buddy is a smart investment planning tool designed to demystify mutual fund investing through Systematic Investment Plans (SIPs). We leverage the power of AI to provide you with a data-driven, personalized investment strategy. Our goal is to make long-term wealth creation accessible, understandable, and achievable for everyone, regardless of their financial expertise.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-8">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map(feature => (
                            <div key={feature.title} className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 flex items-start space-x-4">
                                <div className="flex-shrink-0 bg-slate-100 p-3 rounded-full">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{feature.title}</h3>
                                    <p className="text-slate-500">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-6 rounded-r-lg mb-12">
                    <h2 className="text-2xl font-semibold mb-3">Our Goal</h2>
                    <p className="leading-relaxed">
                        Our primary mission is to empower you with the tools and knowledge needed to make informed investment decisions. We believe that by providing clear, unbiased, and personalized guidance, we can help you navigate the complexities of the financial markets and confidently work towards achieving your financial dreams.
                    </p>
                </div>
            </div>
            <Footer navigateTo={navigateTo} />
        </>
    );
};

export default About;
