import React, { useState, useEffect } from 'react';
import { getUserPlans, deletePlan } from '../services/firestoreService';
import { SavedPlan } from '../types';
import { IconListDetails, IconTrash, IconInfoCircle } from '../components/Icons';
import NotificationModal from '../components/NotificationModal';

interface MyPlansProps {
    onViewPlan: (plan: SavedPlan) => void;
}

const MyPlans: React.FC<MyPlansProps> = ({ onViewPlan }) => {
    const [plans, setPlans] = useState<SavedPlan[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [planToDelete, setPlanToDelete] = useState<SavedPlan | null>(null);

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
                    <p className="text-slate-500 mt-2">Create a new plan from the 'Planner' page to see it here.</p>
                </div>
            )}

            {!isLoading && !error && plans.length > 0 && (
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                    <ul className="divide-y divide-slate-200">
                        {plans.map(plan => (
                            <li key={plan.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="font-semibold text-lg text-slate-800">{plan.planName}</h3>
                                    <p className="text-sm text-slate-500">Saved on: {formatDate(plan.createdAt)}</p>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <button
                                        onClick={() => onViewPlan(plan)}
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