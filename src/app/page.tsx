"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useHeader } from './hooks/useHeader';
import { checkApiHealth } from './services/api/user';

export default function Home() {
  const { isUserLoggedIn } = useHeader();
  const router = useRouter();

  useEffect(() => {
    checkApiHealth()
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
