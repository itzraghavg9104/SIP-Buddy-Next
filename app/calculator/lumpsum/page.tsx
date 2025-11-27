'use client';

import { useRouter } from 'next/navigation';
import LumpsumCalculator from '../../../components/LumpsumCalculator';

export default function LumpsumCalculatorPage() {
    const router = useRouter();

    return <LumpsumCalculator onBack={() => router.push('/calculator')} />;
}
