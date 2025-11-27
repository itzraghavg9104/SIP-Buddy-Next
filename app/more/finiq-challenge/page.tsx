'use client';

import { useRouter } from 'next/navigation';
import FinIQChallenge from '../../../components/tools/FinIQChallenge';

export default function FinIQChallengePage() {
    const router = useRouter();

    return <FinIQChallenge onBack={() => router.push('/more')} />;
}
