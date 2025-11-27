'use client';

import { useRouter } from 'next/navigation';
import SWPCalculator from '../../../components/SWPCalculator';

export default function SWPCalculatorPage() {
    const router = useRouter();

    return <SWPCalculator onBack={() => router.push('/calculator')} />;
}
