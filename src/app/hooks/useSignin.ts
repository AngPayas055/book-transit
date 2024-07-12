import { useState } from "react";
import { userSignIn } from "../services/api/user";
import { useHeader } from "./useHeader";
import { useRouter } from 'next/navigation'
// interface UserData {
//   email: string;
//   password: string;
// }
export function useSignin () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setUserFirstName, setIsUserLoggedIn } = useHeader();
  const router = useRouter()
  
  const handleEmailInput = (e: any) => {
    setEmail(e);
  };
  const handlePasswordInput = (e: any) => {
    setPassword(e);
  };


  const handleSignIn = async (e: any) => {
    e.preventDefault();
    console.log(email,password)
    const userData = await userSignIn(email, password)
    console.log(userData.data)
    if(userData.data.token.length > 0){
      setUserFirstName(userData.data.firstName)
      setIsUserLoggedIn(true)
      localStorage.setItem("token", userData.data.token);
      localStorage.setItem("email", userData.data.email);
      localStorage.setItem("firstName", userData.data.firstName);
      localStorage.setItem("lastName", userData.data.lastName);
      router.push('/')
    } else {
      console.log('error')
      // openNotificationWithIcon('error', 'Error', "Invalid username/password");
    }
    // const data = await getAuthToken(email, password);
    // //@ts-ignore
    // const token = data.token;

    // if (token) {
    //   localStorage.setItem("token", token);
    //   localStorage.setItem("email", email);
    //   localStorage.setItem("admin", data.is_admin);
    //   localStorage.setItem("org_admin", data.is_org_admin);
    //   let currentWindow = await localStorage.getItem("currentWindow")
    //   if(currentWindow && currentWindow.length > 0){
    //     router.push(currentWindow);
    //   }else{
    //     router.push("/sales-sequence");
    //   }
    //   const tokenVerified = await jwtAuthCheck(token);
    // } else {
    //   openNotificationWithIcon('error', 'Error', "Invalid username/password");
    // }
  };

  return {
    handleEmailInput,
    handlePasswordInput,
    handleSignIn,
  }
}