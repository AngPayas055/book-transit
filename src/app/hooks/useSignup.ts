import { useState } from "react";
import { userSignUp } from "../services/api/user";
import { useNotification } from "../context/notificationContext";
import { useRouter } from 'next/navigation'

export function useSignup () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");  
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [phone, setphone] = useState<string>("");

  const { openNotificationWithIcon } = useNotification();
  const router = useRouter()
  const handleEmailInput = (e: any) => {
    setEmail(e);
  };
  const handlePasswordInput = (e: any) => {
    setPassword(e);
  };  
  const handleFirstNameInput = (e: any) => {
    setFirstName(e);
  };
  const handleLastNameInput = (e: any) => {
    setlastName(e);
  };
  const handlePhoneInput = (e: any) => {
    setphone(e);
  };
  const handleSignUp = async (e: any) => {
    e.preventDefault();
    console.log(email,password,phone,firstName,lastName)
    try{
      const userObj = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phone: phone
      }
      const userData = await userSignUp(userObj)
      if(userData.data){
        openNotificationWithIcon('success', 'Success', userData.message || 'Invalid username/password');
        router.push('/signin');
      }else{        
        console.log(userData.message)
        openNotificationWithIcon('error', 'Error', userData.message || 'Invalid username/password');
      }

    }catch (error) {
      console.error("error", error);
    }
  }
  return {
    handleEmailInput,
    handlePasswordInput,
    handleFirstNameInput,
    handleLastNameInput,
    handlePhoneInput,
    handleSignUp
  }
}