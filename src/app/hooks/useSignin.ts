import { useState } from "react";
import { userSignIn } from "../services/api/user";
import { useHeader } from "./useHeader";
import { useRouter } from 'next/navigation'
import { useNotification } from "../context/notificationContext";
// interface UserData {
//   email: string;
//   password: string;
// }
export function useSignin () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setUserFirstName, setIsUserLoggedIn, userId, setUserId } = useHeader();
  const router = useRouter()
  
  const handleEmailInput = (e: any) => {
    setEmail(e);
  };
  const handlePasswordInput = (e: any) => {
    setPassword(e);
  };
  const { openNotificationWithIcon } = useNotification();
  
  const handleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      const userData = await userSignIn(email, password);
      if (userData.data && userData.data.token) {
        setUserFirstName(userData.data.firstName)
        setIsUserLoggedIn(true)
        localStorage.setItem("token", userData.data.token);
        localStorage.setItem("email", userData.data.email);
        localStorage.setItem("firstName", userData.data.firstName);
        localStorage.setItem("lastName", userData.data.lastName);
        setUserId(userData.data.id)
        openNotificationWithIcon('success', 'Success', "You've logged in, " + userData.data.firstName);
        router.push('/');
      } else {
        openNotificationWithIcon('error', 'Error', userData.message || 'Invalid username/password');
      }
    } catch (error: any) {
      openNotificationWithIcon('error', 'Error', error.message || 'An error occurred during sign in');
    }
  };

  return {
    handleEmailInput,
    handlePasswordInput,
    handleSignIn,
  }
}