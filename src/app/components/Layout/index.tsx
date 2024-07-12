'use client'
import { Layout } from 'antd';
import LayoutHeader from "../Header";
import FooterLayout from '../Footer';
const { Content } = Layout;

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Layout>
      <LayoutHeader/>
      <Content className='w-full max-w-[1200px] mx-auto p-3 min-h-[calc(100vh-135px)]'>
        {children}
      </Content>
      <FooterLayout/>
    </Layout>
  )
}