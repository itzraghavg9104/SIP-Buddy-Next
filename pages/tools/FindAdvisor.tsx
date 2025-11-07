import React, { useState, useEffect } from 'react';
import { findFinancialAdvisors } from '../../services/geminiService';
import { FinancialAdvisor, GroundingChunk } from '../../types';
import { IconInfoCircle, IconMapPin, IconPhone, IconWorld } from '../../components/Icons';

const DEFAULT_MAP_URL = 'https://www.google.com/maps?q=India&z=5&output=embed';

const FindAdvisor: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [advisors, setAdvisors] = useState<FinancialAdvisor[]>([]);
  const [groundingChunks, setGroundingChunks] = useState<GroundingChunk[]>([]);
  const [mapUrl, setMapUrl] = useState(DEFAULT_MAP_URL);
  const [selectedAdvisor, setSelectedAdvisor] = useState<FinancialAdvisor | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchAdvisors = async (location: { latitude: number; longitude: number } | { query: string }) => {
    setIsLoading(true);
    setError(null);
    setAdvisors([]);
    setSelectedAdvisor(null);
    try {
      const { advisors: fetchedAdvisors, groundingChunks: fetchedChunks } = await findFinancialAdvisors(location);
      if(fetchedAdvisors.length === 0) {
        setError("No financial advisors found for this location. Please try a different search.");
      } else {
        setAdvisors(fetchedAdvisors);
        setGroundingChunks(fetchedChunks as GroundingChunk[]);
        
        const firstAdvisorWithCoords = fetchedAdvisors.find(a => a.latitude !== null && a.longitude !== null);
        const firstAdvisor = fetchedAdvisors[0] || null;

        // Select the first advisor by default to show details immediately
        setSelectedAdvisor(firstAdvisor);

        if (firstAdvisorWithCoords) {
            setMapUrl(`https://www.google.com/maps?q=${firstAdvisorWithCoords.latitude},${firstAdvisorWithCoords.longitude}&z=15&output=embed`);
        } else if ('query' in location) {
            setMapUrl(`https://www.google.com/maps?q=${location.query.replace(/ /g, '+')}&z=12&output=embed`);
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred while fetching advisors.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setMapUrl(`https://www.google.com/maps?q=${latitude},${longitude}&z=13&output=embed`);
        fetchAdvisors({ latitude, longitude });
      },
      (geoError) => {
        console.warn('Geolocation denied:', geoError.message);
        setError('Could not get your location. Please use the search bar to find advisors.');
        setIsLoading(false);
      }
    );
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchAdvisors({ query: searchQuery });
    }
  };
  
  const handleSelectAdvisor = (advisor: FinancialAdvisor) => {
    setSelectedAdvisor(advisor);
    if (advisor.latitude !== null && advisor.longitude !== null) {
      setMapUrl(`https://www.google.com/maps?q=${advisor.latitude},${advisor.longitude}&z=15&output=embed`);
    }
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-1">Find a Financial Advisor</h1>
        <p className="text-slate-600">Discover registered advisors near you based on live data.</p>
      </div>
      <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-6 flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter a city or pin code..."
          className="w-full px-4 py-3 bg-white rounded-full border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
        />
        <button type="submit" className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-700 transition-colors">
          Search
        </button>
      </form>

      <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg">
          <div className="flex">
              <div className="py-1"><IconInfoCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" /></div>
              <div>
                  <p className="font-bold">Disclaimer:</p>
                  <p className="text-sm">Advisor information is provided by Google Maps and may not be exhaustive. Always verify credentials before engaging with a financial advisor.</p>
              </div>
          </div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8" style={{ height: 'calc(100vh - 350px)', minHeight: '550px' }}>
        <div className="lg:col-span-1 bg-slate-200 rounded-xl overflow-hidden shadow-lg border border-slate-300">
           <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={mapUrl}
            ></iframe>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 flex flex-col h-1/2">
                 <h2 className="text-lg font-semibold text-slate-800 mb-3 pb-3 border-b border-slate-200 flex-shrink-0">Advisors Found</h2>
                 <div className="flex-grow overflow-y-auto pr-2">
                    {isLoading && <div className="text-center p-8 text-slate-500">
                        <div className="w-8 h-8 border-4 border-cyan-200 border-t-cyan-600 rounded-full animate-spin mx-auto mb-4"></div>
                        Searching for advisors...
                    </div>}
                    {error && !isLoading && <div className="text-center p-8 text-red-600 bg-red-50 rounded-lg">{error}</div>}
                    {!isLoading && !error && advisors.length > 0 && (
                        <ul className="space-y-2">
                            {advisors.map((advisor, index) => {
                                const hasCoords = advisor.latitude !== null && advisor.longitude !== null;
                                return (
                                    <li key={index}>
                                        <button onClick={() => handleSelectAdvisor(advisor)} className={`w-full text-left p-3 rounded-lg border-2 transition-all ${selectedAdvisor?.name === advisor.name && selectedAdvisor.address === advisor.address ? 'bg-cyan-50 border-cyan-500 shadow-sm' : 'border-transparent hover:bg-slate-100'}`}>
                                            <p className="font-semibold text-slate-800 flex items-center gap-2">
                                                <IconMapPin className={`h-4 w-4 flex-shrink-0 ${hasCoords ? 'text-cyan-600' : 'text-slate-400'}`} />
                                                {advisor.name}
                                            </p>
                                            {advisor.firm && <p className="text-sm text-slate-600 pl-6">{advisor.firm}</p>}
                                            <p className="text-xs text-slate-500 mt-1 pl-6 line-clamp-1">{advisor.address}</p>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                 </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 flex flex-col h-1/2">
                <h2 className="text-lg font-semibold text-slate-800 mb-3 pb-3 border-b border-slate-200 flex-shrink-0">Details</h2>
                <div className="flex-grow overflow-y-auto pr-2">
                    {selectedAdvisor ? (
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">{selectedAdvisor.name}</h3>
                            {selectedAdvisor.firm && <p className="text-md text-slate-600 font-semibold mb-4">{selectedAdvisor.firm}</p>}
                            
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start gap-3">
                                    <IconMapPin className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">{selectedAdvisor.address}</span>
                                </li>
                                {selectedAdvisor.phone && (
                                    <li className="flex items-center gap-3">
                                        <IconPhone className="h-5 w-5 text-slate-400 flex-shrink-0" />
                                        <a href={`tel:${selectedAdvisor.phone}`} className="text-blue-600 hover:underline">{selectedAdvisor.phone}</a>
                                    </li>
                                )}
                                {selectedAdvisor.website && (
                                    <li className="flex items-center gap-3">
                                        <IconWorld className="h-5 w-5 text-slate-400 flex-shrink-0" />
                                        <a href={selectedAdvisor.website.startsWith('http') ? selectedAdvisor.website : `https://${selectedAdvisor.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">{selectedAdvisor.website}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-slate-500 text-center">
                            <p>
                                {isLoading ? 'Loading details...' : 'Select an advisor from the list to see their details.'}
                            </p>
                        </div>
                    )}
                </div>
                {groundingChunks.length > 0 && selectedAdvisor && (
                    <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 flex-shrink-0">
                        <p className="font-semibold mb-2">Data Sources:</p>
                        <ul className="list-disc list-inside space-y-1">
                        {groundingChunks.map((chunk, index) => (
                            <li key={index} className="truncate">
                                <a href={chunk.maps.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{chunk.maps.title || 'Google Maps Source'}</a>
                            </li>
                        ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default FindAdvisor;