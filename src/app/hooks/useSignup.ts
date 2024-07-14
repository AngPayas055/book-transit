import { useState } from "react";
import { userSignUp } from "../services/api/user";

export function useSignup () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");  
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [phone, setphone] = useState<string>("");

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
      if(userData.data.error){
        console.log(userData.data.error)
      }else{        
        console.log(userData.data.message)
      }
      // if(userData.data.token.length > 0){
      //   setUserFirstName(userData.data.firstName)
      //   setIsUserLoggedIn(true)
      //   localStorage.setItem("token", userData.data.token);
      //   localStorage.setItem("email", userData.data.email);
      //   localStorage.setItem("firstName", userData.data.firstName);
      //   localStorage.setItem("lastName", userData.data.lastName);
      //   router.push('/')
      // } else {
      //   console.log('error')
      //   // openNotificationWithIcon('error', 'Error', "Invalid username/password");
      // }

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