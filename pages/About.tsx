import React from 'react';
// Fix: Removed 'IconTarget' as it is not an exported member of '../components/Icons'.
import { IconSparkles, IconLayoutDashboard, IconBook, IconCalculator, IconMail, LogoImage } from '../components/Icons';

const About: React.FC = () => {
    const features = [
        {
            icon: <IconSparkles className="h-8 w-8 text-blue-600" />,
            title: 'AI-Powered Planner',
            description: 'Get a personalized SIP investment plan based on your unique financial profile, risk tolerance, and goals.'
        },
        {
            icon: <IconLayoutDashboard className="h-8 w-8 text-green-600" />,
            title: 'Interactive Dashboard',
            description: 'Visualize your asset allocation, growth projections, and recommended funds in an easy-to-understand dashboard.'
        },
        {
            icon: <IconBook className="h-8 w-8 text-indigo-600" />,
            title: 'Learning Center',
            description: 'Empower yourself with knowledge. Our learn section breaks down complex investment topics into simple concepts.'
        },
        {
            icon: <IconCalculator className="h-8 w-8 text-orange-600" />,
            title: 'Financial Calculators',
            description: 'Plan for your future with precision using our advanced SIP and SWP calculators.'
        }
    ];
    
    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="text-center mb-12">
                <LogoImage
                    src="/assets/logoFull.png"
                    alt="SIP Buddy Logo"
                    className="h-16 mx-auto mb-6"
                    crossOrigin="anonymous"
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
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Key Features</h2>
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
            
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-slate-800 mb-3">Have Feedback or Suggestions?</h2>
                <p className="text-slate-600 mb-4">We are constantly working to improve SIP Buddy and would love to hear from you!</p>
                <a 
                    href="mailto:contact.sipbuddy@gmail.com"
                    className="inline-flex items-center gap-2 py-3 px-6 bg-slate-800 text-white font-semibold rounded-lg shadow-md hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
                >
                    <IconMail className="w-5 h-5" />
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default About;