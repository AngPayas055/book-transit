import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { verifyEMail } from '../services/api/user';
import { useNotification } from '../context/notificationContext';

export function useVerifyEmail() {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter()
  const { openNotificationWithIcon } = useNotification();

  useEffect(() => {
    if (token && loading) {
      verifyEmail();
    }
  }, [token, loading]);

  const verifyEmail = async () => {
    try {
      const verify = await verifyEMail(token || "");
      const data = verify.data || {};
      if ('error' in data) {
        openNotificationWithIcon('error', 'Error', data.error);
      } else {
        openNotificationWithIcon('success', 'Success', 'Email verified successfully! login to continue');
      }
    } catch (error) {
      console.error('Verification failed:', error);
      openNotificationWithIcon('error', 'Error', 'An error occurred during verification.');
    } finally {
      setLoading(false);
      router.push('/signin');
    }
  };

  return { token };
}