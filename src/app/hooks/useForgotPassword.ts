import { useState } from "react";
import { getResetLink, resetNewPassword } from "../services/api/user";
import { useNotification } from "../context/notificationContext";
import { useRouter } from 'next/navigation'

export function useForgotPassword () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [resetToken, setResetToken] = useState<string>("");
  const { openNotificationWithIcon } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const handlePasswordInput = (e: any) => {
    setPassword(e);
  };
  const handleConfirmPasswordInput = (e: any) => {
    setConfirmPassword(e);
  };
  const handleEmailInput = (e: any) => {
    setEmail(e);
  };
  const handleSendResetLink = async (e: any) => {
    setIsLoading(true)
    try{
      const resetPassword = await getResetLink(email)
      if(resetPassword.message){
        router.push('/signin');
        openNotificationWithIcon('success', 'Success', "Success! We've sent a password reset email to your inbox.");
      }else if(resetPassword.data.error) {
        openNotificationWithIcon('error', 'Error', resetPassword.data.message);  
      }
      setIsLoading(false)
    } catch (error){
      console.log('errssd',error)
      setIsLoading(false)
    }
  }
  const handleResetPassword = async (e: any) => {
    console.log(password,confirmPassword,e)
    if(password !== confirmPassword){
      return openNotificationWithIcon('error', 'Error', "Your passwords don't match. Please try again");  
    }
    if(password.length < 7){
      return openNotificationWithIcon('error', 'Error', "Your password is too short. Please use at least 7 characters."); 
    }
    try{
      const resetPassVar = await resetNewPassword(password, confirmPassword, e)
      if(resetPassVar.message){
        openNotificationWithIcon('success', 'Success', "Your password has been reset");
        router.push('/signin');
      }
    }catch (error) {
      console.log('error',error)
    }
  }

  return {
    handleEmailInput,
    handleSendResetLink,
    handleConfirmPasswordInput,
    handlePasswordInput,
    handleResetPassword,
    setResetToken,
    isLoading
  }
}