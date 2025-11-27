'use client';

import { useRouter } from 'next/navigation';
import SIPCalculator from '../../../components/SIPCalculator';

export default function SIPCalculatorPage() {
    const router = useRouter();

    return <SIPCalculator onBack={() => router.push('/calculator')} />;
}
