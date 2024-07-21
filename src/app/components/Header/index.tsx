"use client"
import { Button, Layout, Menu, Popover, Space, Typography } from "antd";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
import { UserSwitchOutlined, LogoutOutlined } from '@ant-design/icons';
import { useHeader } from "@/app/hooks/useHeader";

const { Header } = Layout;

export default function LayoutHeader() {
  const router = useRouter();
  const pathname = usePathname()
  const { Title } = Typography;
  const { firstName, isUserLoggedIn, logout } = useHeader()
  const userContent = (
    <div>
      <Button onClick={logout} icon={<LogoutOutlined />}>Signout</Button>
    </div>
  );

  return (
    <Header style={{ display: 'flex', alignItems: 'center', padding: '0'}}>
      <span className="w-full max-w-[1440px] flex justify-between mx-auto items-center p-3">    
        <a onClick={(e: any) => router.push("/")} className="text-3xl font-bold text-sky-400">SmartCompose</a>
        <Space>          
          {!isUserLoggedIn && pathname !== "/signup" && <Button type="primary" onClick={(e: any) => router.push("/signup")}>Register</Button>}    
          {!isUserLoggedIn && pathname !== "/signin" && <Button type="primary" onClick={(e: any) => router.push("/signin")} ghost>Sign in</Button>}
          <Popover content={userContent} placement="bottomRight">
            {isUserLoggedIn && <Button type="primary" icon={<UserSwitchOutlined />}>Hi, {firstName}</Button>}
          </Popover>
        </Space>
      </span>
    </Header>
  )
}