import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { IconMapPin, IconBrain, IconSearch } from '../components/Icons';
import { useSearchParams, useRouter } from 'next/navigation';

const tools = [
  {
    id: 'find-advisor',
    title: 'Finance Buddy Near Me',
    description: 'Find registered financial advisors in your area using an interactive map.',
    icon: <IconMapPin className="h-8 w-8 text-cyan-600" />,
  },
  {
    id: 'finiq-challenge',
    title: 'FinIQ Challenge',
    description: 'Test your financial knowledge with our AI-powered dynamic quiz game.',
    icon: <IconBrain className="h-8 w-8 text-indigo-600" />,
  },
];

const MoreContent: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');

  // Redirect old query param URLs to new routes for backward compatibility
  useEffect(() => {
    const tool = searchParams ? searchParams.get('tool') : null;
    if (tool === 'find-advisor') router.replace('/more/find-advisor');
    else if (tool === 'finiq-challenge') router.replace('/more/finiq-challenge');
  }, [searchParams, router]);

  // Filter tools based on search query
  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return tools;
    const query = searchQuery.toLowerCase();
    return tools.filter(tool =>
      tool.title.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Additional Tools</h1>
        <p className="text-lg text-slate-600">
          Explore more tools to enhance your financial journey.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconSearch className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search tools..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {filteredTools.length === 0 ? (
        <div className="text-center p-12 bg-white rounded-xl shadow-md border border-slate-200">
          <IconSearch className="h-12 w-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-800">No Tools Found</h3>
          <p className="text-slate-500 mt-2">No tools match your search query "{searchQuery}".</p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredTools.map(tool => (
            <button
              key={tool.id}
              onClick={() => router.push(`/more/${tool.id}`)}
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
      )}
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
