'use client'
import { Layout } from 'antd';
import LayoutHeader from "../Header";
import FooterLayout from '../Footer';
import { HeaderProvider } from '@/app/hooks/useHeader';
const { Content } = Layout;

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Layout>
      <HeaderProvider>
        <LayoutHeader/>
        <Content className='w-full max-w-[1200px] mx-auto p-3 min-h-[calc(100vh-135px)]'>
          {children}
        </Content>
      </HeaderProvider>
      <FooterLayout/>
    </Layout>
  )
}