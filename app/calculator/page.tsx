'use client';

import { Suspense } from 'react';
import Calculator from '../../components/CalculatorContent';

export default function CalculatorPage() {
    return (
        <Suspense fallback={<div>Loading calculator...</div>}>
            <Calculator />
        </Suspense>
    );
}
