"use client"
import { Button, Input, Space, Spin, Typography } from "antd";
import { useRouter } from "next/navigation";
import styles from './signin.module.css'
import { useSignin } from '../hooks/useSignin'
import { LoadingOutlined } from '@ant-design/icons';

export default function Signin() {

  const {
    handleEmailInput,
    handlePasswordInput,
    handleSignIn,
    isSigninLoading
  } = useSignin();

  const { Title } = Typography;
  const router = useRouter();

  return (
    <div className={styles.signinCont}>
      <div className={styles.signinLeft}>
        <div className="text-center max-w-[350px]">          
          <Title level={4} type="secondary">
            SmartCompose is a full-stack web application built with Next.js, 
            Express.js, and MongoDB. It leverages the OpenAI API to generate customized messages based on user-selected settings. 
            Key features include user registration, login, password recovery, and account verification. 
            Email functionalities are managed using Amazon SES, facilitating secure password recovery and user verification processes. 
          </Title>
        </div>
      </div>
      <div className={styles.signinRight}>  
        <div className="p-3">              
          <Title level={2}>Sign in</Title>
          <div className="flex flex-col items-start mb-3">
            <label>Email</label>
            <Input onChange={(e) => handleEmailInput(e.target.value)} className="mt-2" size="large" placeholder="Enter Email Address"/>
          </div>
          <div className="flex flex-col items-start mb-3">
            <label>Password</label>
            <Input onChange={(e) => handlePasswordInput(e.target.value)} className="mt-2" type="password" size="large" placeholder="Password"/>
          </div>
          <div className="flex justify-end pb-2">
            <a onClick={(e: any) => router.push("/forgot-password")} className="underline mb-2 text-right">Forgot Password</a>
          </div>
          <Button onClick={(e) => handleSignIn(e)} type="primary" block disabled={isSigninLoading}>
            {isSigninLoading ?<span>Signing In...<LoadingOutlined/></span> : 'Sign In'}
          </Button>
          <Button onClick={(e: any) => router.push("/signup")} className="mt-3" block>Don't have an account? <span className="text-red-500">Register Now</span></Button>
        </div>  
      </div>
    </div>
  )
}