"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useHeader } from './hooks/useHeader';

export default function Home() {
  const { isUserLoggedIn } = useHeader();
  const router = useRouter();

  useEffect(() => {
    if (isUserLoggedIn) {
      router.push('/write');
    } else {
      router.push('/home');
    }
  }, [isUserLoggedIn, router]);

  return (
    <div>
      {/* Optionally show a loading spinner or message here */}
    </div>
  );
}
