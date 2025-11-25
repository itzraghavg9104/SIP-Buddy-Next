'use client';

import { Suspense } from 'react';
import More from '../../components/MoreContent';

export default function MorePage() {
    return (
        <Suspense fallback={<div>Loading tools...</div>}>
            <More />
        </Suspense>
    );
}
