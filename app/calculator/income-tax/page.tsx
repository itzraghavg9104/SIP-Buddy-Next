'use client';

import { useRouter } from 'next/navigation';
import IncomeTaxCalculator from '../../../components/tools/IncomeTaxCalculator';

export default function IncomeTaxCalculatorPage() {
    const router = useRouter();

    return <IncomeTaxCalculator onBack={() => router.push('/calculator')} />;
}
