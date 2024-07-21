'use client'
import { Layout } from 'antd';
import LayoutHeader from "../Header";
import FooterLayout from '../Footer';
import { HeaderProvider } from '@/app/hooks/useHeader';
import { NotificationProvider } from '@/app/context/notificationContext';
const { Content } = Layout;

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Layout>
      <NotificationProvider>
      <HeaderProvider>
        <LayoutHeader/>
        <Content className='w-full max-w-[1440px] mx-auto  min-h-[calc(100vh-80px)]'>
          {children}
        </Content>
      </HeaderProvider>
      </NotificationProvider>
      {/* <FooterLayout/> */}
    </Layout>
  )
}