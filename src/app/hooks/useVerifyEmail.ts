import { useSearchParams } from 'next/navigation'
export function useVerifyEmail () {  
  const searchParams = useSearchParams()  
  const token = searchParams.get('token')
  return {
   token
  }
}