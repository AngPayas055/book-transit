"use client"
import React from 'react';
import { SnippetsOutlined, FormOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useWrite } from '../hooks/useWrite';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: 1,
    icon: React.createElement(FormOutlined),
    label: `Write`,
  },
  {
    key: 2,
    icon: React.createElement(SnippetsOutlined),
    label: `Reply`,
  }
]
export default function Write () {
  const {
    handleMenuClick,selectedKey
  } = useWrite()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
      <div>
        write
      </div>
    )
}