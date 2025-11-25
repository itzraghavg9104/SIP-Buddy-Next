import React, { useState, useEffect, Suspense } from 'react';
import FindAdvisor from './tools/FindAdvisor';
import FinIQChallenge from './tools/FinIQChallenge';
import { IconMapPin, IconBrain } from '../components/Icons';
import { Page } from '../types';
import { useSearchParams, useRouter } from 'next/navigation';

const tools = [
  {
    id: 'find-advisor',
    title: 'Finance Buddy Near me',
    description: 'Find registered financial advisors in your area using an interactive map.',
    icon: <IconMapPin className="h-8 w-8 text-cyan-600" />,
    component: <FindAdvisor />,
  },
  {
    id: 'finiq-challenge',
    title: 'FinIQ Challenge',
    description: 'Test your financial knowledge with our AI-powered dynamic quiz game.',
    icon: <IconBrain className="h-8 w-8 text-indigo-600" />,
    component: <FinIQChallenge onBack={() => { }} />, // onBack will be overridden in render
  },
];

const MoreContent: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialActiveId = searchParams ? searchParams.get('tool') : null;

  const [activeToolId, setActiveToolId] = useState<string | null>(initialActiveId || null);

  useEffect(() => {
    setActiveToolId(initialActiveId || null);
  }, [initialActiveId]);

  const activeTool = tools.find(t => t.id === activeToolId);

  const handleBack = () => {
    setActiveToolId(null);
    router.push('/more');
  };

  const navigateTo = (path: string, params?: any) => {
    if (params) {
      // Construct query string
      const queryString = new URLSearchParams(params).toString();
      router.push(`${path}?${queryString}`);
    } else {
      router.push(path);
    }
  };

  if (activeTool) {
    // Clone the component and pass the onBack prop and navigateTo
    const componentWithProps = React.cloneElement(activeTool.component as React.ReactElement<any>, {
      onBack: handleBack,
      navigateTo: navigateTo
    });
    return (
      <div className="max-w-6xl mx-auto">
        <button
          onClick={handleBack}
          className="flex items-center text-sm font-semibold text-blue-600 hover:underline mb-6 p-2 -ml-2 rounded-md hover:bg-slate-100 transition-colors"
          aria-label="Back to More Tools"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          Back to More Tools
        </button>
        {componentWithProps}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">More Tools</h1>
        <p className="text-lg text-slate-600">
          Explore additional tools to help with your financial journey.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {tools.map(tool => (
          <button
            key={tool.id}
            onClick={() => setActiveToolId(tool.id)}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-left hover:shadow-xl hover:border-cyan-500 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            <div className="bg-slate-100 p-3 rounded-full w-fit mb-4">
              {tool.icon}
            </div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">{tool.title}</h2>
            <p className="text-slate-500">{tool.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

const More: React.FC = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
      <MoreContent />
    </Suspense>
  );
};

export default More;
