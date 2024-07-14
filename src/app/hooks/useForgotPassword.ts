import { useState } from "react";
import { getResetLink } from "../services/api/user";
import { useNotification } from "../context/notificationContext";
import { useRouter } from 'next/navigation'

export function useForgotPassword () {
  const [email, setEmail] = useState<string>("");
  const { openNotificationWithIcon } = useNotification();
  const router = useRouter()

  const handleEmailInput = (e: any) => {
    setEmail(e);
  };
  const handleSendResetLink = async (e: any) => {
    console.log(email)
    try{
      const resetPassword = await getResetLink(email)
      console.log('jres',resetPassword)
      if(resetPassword.message){
        router.push('/signin');
        openNotificationWithIcon('success', 'Success', "Success! We've sent a password reset email to your inbox.");
      }else if(resetPassword.data.error) {
        openNotificationWithIcon('error', 'Error', resetPassword.data.message);  
      }
    } catch (error){
      console.log('errssd',error)
    }
  }

  return {
    handleEmailInput,
    handleSendResetLink
  }
}