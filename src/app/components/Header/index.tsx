"use client"
import { Button, Layout, Menu, Popover, Space, Typography } from "antd";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
import { UserSwitchOutlined, LogoutOutlined, MailOutlined, DeliveredProcedureOutlined, FormOutlined  } from '@ant-design/icons';
import { useHeader } from "@/app/hooks/useHeader";
import type { MenuProps } from 'antd';
import Link from 'next/link';
import styles from './header.module.css'

const { Header } = Layout;

export default function LayoutHeader() {
  const router = useRouter();
  const pathname = usePathname()
  const { Title } = Typography;
  const { firstName, isUserLoggedIn, logout, userId, adminPage } = useHeader()
  const userContent = (
    <div>
      <Button onClick={logout} icon={<LogoutOutlined />}>Signout</Button>
    </div>
  );
  const menuItems : MenuProps['items'] = [
    {
      key: 'write', 
      icon: <FormOutlined />, 
      label: (<Link href="/write"><span className="text-white">Write</span></Link>),
    },
    // { 
    //   key: 'create-message', 
    //   icon: <SnippetsOutlined />, 
    //   label: (<Link href="/create-message">Create Message</Link>),
    // },
    { 
      key: 'emails', 
      icon: <MailOutlined />, 
      label: (<Link href="/emails">Emails</Link>),
    },
  ];

  return (
    <Header style={{ display: 'flex', alignItems: 'center', padding: '0'}}>
      <span className="w-full max-w-6xl flex justify-between mx-auto items-center p-3">    
        <a onClick={(e: any) => router.push("/")} className="text-3xl font-bold text-sky-400">
          <span className="hidden sm:block">SmartCompose</span>
          <span className="sm:hidden">SC</span>
        </a>
        {isUserLoggedIn &&        
          <Menu 
            theme="dark"
            className={styles.menu}
            defaultSelectedKeys={['1']}
            mode="horizontal" 
            items={menuItems} 
            style={{ flex: "auto", maxWidth: 2000, width: '100%' }}
          />
        }
        <Space>   
          {/* {userId === '65bb4323095bd2f0160d6600' && <Button onClick={(e:any) => {adminPage()}}>Admin</Button>} */}
          {!isUserLoggedIn && pathname !== "/signup" && 
            <Button type="primary" onClick={(e: any) => router.push("/signup")} ghost>
              Register
            </Button>
          }    
          {!isUserLoggedIn && pathname !== "/signin" && 
            <Button type="primary" onClick={(e: any) => router.push("/signin")}  icon={<DeliveredProcedureOutlined />} >
              Get Started
            </Button>
          }
          <Popover content={userContent} placement="bottomRight">
            {isUserLoggedIn && <Button type="primary" icon={<UserSwitchOutlined />}>Hi, {firstName}</Button>}
          </Popover>
        </Space>
      </span>
    </Header>
  )
}