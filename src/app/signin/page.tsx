"use client"
import { Button, Input, Space, Typography  } from "antd";
import { useRouter } from "next/navigation";
import styles from './signin.module.css'
import { useSignin } from '../hooks/useSignin'

export default function signin() {

  const {
    handleEmailInput,
    handlePasswordInput,
    handleSignIn
  } = useSignin();

  const { Title } = Typography;
  const router = useRouter();

  return (
    <div className={styles.signinCont}>
      <div className={styles.signinLeft}>
        <div className="text-center max-w-[350px]">          
          <Title level={3} type="secondary">Simplified Booking Process</Title>
          <Title level={4} type="secondary">
            With our user-friendly interface and secure payment options, booking has never been easier.
            Streamline your travel experience, save time, and eliminate stress as you prepare for your 
            upcoming adventures
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
          <Button onClick={(e) => handleSignIn(e)} type="primary" block>Sign in</Button>
          <Button onClick={(e: any) => router.push("/signup")} className="mt-3" block>Don't have an account? <span className="text-red-500">Register Now</span></Button>
        </div>  
      </div>
    </div>
  )
}