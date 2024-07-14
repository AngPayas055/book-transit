"use client"
import styles from '../forgot-password.module.css'
import { Button, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useForgotPassword } from '@/app/hooks/useForgotPassword';

export default function Page({ params }: { params: { slug: string } }) {
  const { Title } = Typography;
  const router = useRouter();
  const {
    handleConfirmPasswordInput,
    handlePasswordInput,
    handleResetPassword,
    setResetToken
  } = useForgotPassword()
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
          <Title level={2}>Reset Password</Title>
          <div className="flex flex-col items-start mb-3">
            <label>Password</label>
            <Input onChange={(e) => handlePasswordInput(e.target.value)} className="mt-2" type="password" size="large" placeholder="Password"/>
          </div>
          <div className="flex flex-col items-start mb-3">
            <label>Confirm Password</label>
            <Input onChange={(e) => handleConfirmPasswordInput(e.target.value)} className="mt-2" type="password" size="large" placeholder="Password"/>
          </div>
          <Button onClick={
            (e) => handleResetPassword(params.slug)} 
            type="primary" block>Reset Password
          </Button>
          <Button onClick={(e: any) => router.push("/signup")} className="mt-3" block>Don't have an account? <span className="text-red-500">Register Now</span></Button>
        </div>  
      </div>
    </div>
  )
}