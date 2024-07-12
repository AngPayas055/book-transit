"use client"
import { Button, Layout, Menu, Space, Typography } from "antd";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
import { UserSwitchOutlined } from '@ant-design/icons';
import { useHeader } from "@/app/hooks/useHeader";

const { Header } = Layout;

export default function LayoutHeader() {
  const router = useRouter();
  const pathname = usePathname()
  const { Title } = Typography;
  const { firstName } = useHeader()

  return (
    <Header style={{ display: 'flex', alignItems: 'center', padding: '0'}}>
      <span className="w-full max-w-[1200px] flex justify-between mx-auto items-center p-3">    
        <a onClick={(e: any) => router.push("/")} className="text-3xl font-bold text-sky-400">Book Transit</a>
        <Space>          
          {pathname !== "/signup" && <Button type="primary" onClick={(e: any) => router.push("/signup")}>Register</Button>}    
          {pathname !== "/signin" && <Button type="primary" onClick={(e: any) => router.push("/signin")} ghost>Sign in</Button>}
          <Button type="primary" icon={<UserSwitchOutlined />}>
            Hi, {firstName}
          </Button>
        </Space>
      </span>
    </Header>
  )
}