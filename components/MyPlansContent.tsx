import React, { useState, useEffect, useMemo } from 'react';
import { getUserPlans, deletePlan } from '../services/firestoreService';
import { SavedPlan } from '../types';
import { IconListDetails, IconTrash, IconInfoCircle, IconSearch, IconChartPie } from '../components/Icons';
import NotificationModal from '../components/NotificationModal';
import { useGlobalContext } from '../context/GlobalContext';
import { useRouter } from 'next/navigation';

const MyPlans: React.FC = () => {
    const { handleViewPlan } = useGlobalContext();
    const router = useRouter();

    const [plans, setPlans] = useState<SavedPlan[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [planToDelete, setPlanToDelete] = useState<SavedPlan | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const userPlans = await getUserPlans();
                setPlans(userPlans);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Could not fetch plans.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchPlans();
    }, []);

    const handleDelete = async () => {
        if (!planToDelete) return;
        try {
            await deletePlan(planToDelete.id);
            setPlans(plans.filter(p => p.id !== planToDelete.id));
            setPlanToDelete(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Could not delete plan.');
        }
    };

    const formatDate = (timestamp: { seconds: number }) => {
        if (!timestamp) return 'Date not available';
        return new Date(timestamp.seconds * 1000).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    // Filter plans based on search query
    const filteredPlans = useMemo(() => {
        if (!searchQuery.trim()) return plans;
        const query = searchQuery.toLowerCase();
        return plans.filter(plan =>
            plan.planName.toLowerCase().includes(query)
        );
    }, [plans, searchQuery]);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <IconListDetails className="h-10 w-10 text-slate-500" />
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">My Saved Plans</h1>
                    <p className="text-slate-600">View, compare, or delete your saved investment plans.</p>
                </div>
            </div>

            {isLoading && (
                <div className="text-center p-8 text-slate-500">
                    <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                    Loading your saved plans...
                </div>
            )}

            {error && <p className="text-center p-4 bg-red-100 text-red-700 rounded-md">{error}</p>}

            {!isLoading && !error && plans.length === 0 && (
                <div className="text-center p-12 bg-white rounded-xl shadow-md border border-slate-200">
                    <IconInfoCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-800">No Saved Plans Yet</h3>
                    <p className="text-slate-500 mt-2 mb-6">Create a new investment plan to get personalized SIP recommendations.</p>
                    <button
                        onClick={() => router.push('/planner')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                    >
                        <IconChartPie className="w-5 h-5" />
                        Create Your First Plan
                    </button>
                </div>
            )}

            {!isLoading && !error && plans.length > 0 && (
                <>
                    {/* Search Bar */}
                    <div className="mb-6 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <IconSearch className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search plans by name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {filteredPlans.length === 0 ? (
                        <div className="text-center p-12 bg-white rounded-xl shadow-md border border-slate-200">
                            <IconSearch className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-slate-800">No Plans Found</h3>
                            <p className="text-slate-500 mt-2">No plans match your search query "{searchQuery}".</p>
                            <button
                                onClick={() => setSearchQuery('')}
                                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Clear Search
                            </button>
                        </div>
                    ) : (
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-sm text-slate-600">
                                    Showing {filteredPlans.length} of {plans.length} plan{plans.length !== 1 ? 's' : ''}
                                </p>
                            </div>
                            <ul className="divide-y divide-slate-200">
                                {filteredPlans.map(plan => (
                                    <li key={plan.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        <div>
                                            <h3 className="font-semibold text-lg text-slate-800">{plan.planName}</h3>
                                            <p className="text-sm text-slate-500">Saved on: {formatDate(plan.createdAt)}</p>
                                        </div>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <button
                                                onClick={() => handleViewPlan(plan)}
                                                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors text-sm"
                                            >
                                                View Plan
                                            </button>
                                            <button
                                                onClick={() => setPlanToDelete(plan)}
                                                className="p-2 text-slate-500 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
                                            >
                                                <IconTrash className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}

            <NotificationModal
                isOpen={!!planToDelete}
                onClose={() => setPlanToDelete(null)}
                title="Confirm Deletion"
                message={`Are you sure you want to permanently delete the plan named "${planToDelete?.planName}"? This action cannot be undone.`}
            >
                <div className="mt-4 flex gap-4">
                    <button onClick={() => setPlanToDelete(null)} className="flex-1 px-4 py-2 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300">
                        Cancel
                    </button>
                    <button onClick={handleDelete} className="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">
                        Delete
                    </button>
                </div>
            </NotificationModal>
        </div>
    );
};

export default MyPlans;