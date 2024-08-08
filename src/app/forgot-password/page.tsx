"use client"
import { Button, Input, Typography } from 'antd';
import styles from './forgot-password.module.css'
import { useForgotPassword } from '../hooks/useForgotPassword';
import { useRouter } from 'next/navigation'
import { LoadingOutlined } from '@ant-design/icons';

export default function ForgotPassword() {
  const { Title } = Typography;
  const router = useRouter()
  const {
    handleEmailInput,
    handleSendResetLink,
    isLoading
  } = useForgotPassword()

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
          <Title level={2}>Reset Password</Title>
          <div className="flex flex-col items-start mb-3">
            <label>Email</label>
            <Input onChange={(e) => handleEmailInput(e.target.value)} className="mt-2" size="large" placeholder="Enter Email Address"/>
          </div>
          <Button onClick={(e) => handleSendResetLink(e)} type="primary" block>            
            {isLoading ?<span><LoadingOutlined/></span> : 'Send Reset Link'}
          </Button>
          <Button onClick={(e: any) => router.push("/signup")} className="mt-3" block>Don't have an account? <span className="text-red-500">Register Now</span></Button>
        </div>  
      </div>
    </div>
  )
}