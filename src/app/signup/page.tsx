"use client"
import { Button, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useSignup } from "../hooks/useSignup";
import styles from './signup.module.css'
import { LoadingOutlined } from '@ant-design/icons';

export default function Signup () {
  const { Title } = Typography;
  const router = useRouter();
  const {
    handleEmailInput,
    handlePasswordInput,
    handleFirstNameInput,
    handleLastNameInput,
    handlePhoneInput,
    handleSignUp,
    isSignupLoading
  } = useSignup()
  return(
    <div className={styles.signupCont}>
      <div className={styles.signupLeft}>  
        <div className="p-3">              
          <Title level={2}>Sign up</Title>
          <div className="flex flex-col items-start mb-2">
            <label>Email</label>
            <Input onChange={(e) => handleEmailInput(e.target.value)} className="mt-1" size="large" placeholder="Enter Email Address"/>
          </div>
          <div className="flex flex-col items-start mb-2">
            <label>Password</label>
            <Input onChange={(e) => handlePasswordInput(e.target.value)} className="mt-1" type="password" size="large" placeholder="Password"/>
          </div>
          <div className="flex flex-col items-start mb-2">
            <label>Phone number</label>
            <Input onChange={(e) => handlePhoneInput(e.target.value)} className="mt-1" size="large" placeholder="Enter phone number"/>
          </div>
          <div className="flex flex-col items-start mb-2">
            <label>First Name</label>
            <Input onChange={(e) => handleFirstNameInput(e.target.value)} className="mt-1" size="large" placeholder="Enter first name"/>
          </div>
          <div className="flex flex-col items-start mb-2">
            <label>Last Name</label>
            <Input onChange={(e) => handleLastNameInput(e.target.value)} className="mt-1" size="large" placeholder="Enter last name"/>
          </div>
          <Button onClick={(e) => handleSignUp(e)} type="primary" block disabled={isSignupLoading}>            
            {isSignupLoading ?<span><LoadingOutlined/></span> : 'Register'}
          </Button>
          <Button onClick={(e: any) => router.push("/signin")} className="mt-3" block>
            Already registered? <span className="text-red-500">Login</span>
          </Button>
        </div>  
      </div>
      <div className={styles.signupRight}>
        <div className="text-center max-w-[350px]">          
          <Title level={4} type="secondary">
            SmartCompose is a full-stack web application built with Next.js, 
            Express.js, and MongoDB. It leverages the OpenAI API to generate customized messages based on user-selected settings. 
            Key features include user registration, login, password recovery, and account verification. 
            Email functionalities are managed using Amazon SES, facilitating secure password recovery and user verification processes. 
          </Title>
        </div>
      </div>
    </div>
  )
}