"use client"
import React from 'react';
import { SnippetsOutlined, FormOutlined } from '@ant-design/icons';
import { Button, Card, Input, Layout, Menu, Radio, Select, Space, theme, Typography } from 'antd';
import { useWrite } from '../hooks/useWrite';

const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;
const { Text, Link } = Typography;

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
const options = [
  { label: 'Email', value: 'Email' },
  { label: 'Message', value: 'Message' }
];
const sizeOptions = [
  { label: 'Short', value: 'Short' },
  { label: 'Medium', value: 'Medium' },
  { label: 'Long', value: 'Long' }
];
const emojiOptions = [
  { label: 'With emoji', value: 'With emoji' },
  { label: 'No emoji', value: 'No emoji' }
];
const styleOptions = [
  { label: 'Formal', value: 'Formal' },
  { label: 'Friendly', value: 'Friendly' },
  { label: 'Persuasive', value: 'Persuasive' },
  { label: 'Expert', value: 'Expert' },
  { label: 'Joyful', value: 'Joyful' },
  { label: 'Inspirational', value: 'Inspirational' },
  { label: 'Informative', value: 'Informative' },
  { label: 'Thoughtful', value: 'Thoughtful' },
  { label: 'Cautionary', value: 'Cautionary' },
  { label: 'Grieved', value: 'Long' },
  { label: 'Exciting', value: 'Exciting' },
  { label: 'Loving', value: 'Loving' },
  { label: 'Confident', value: 'Confident' },
  { label: 'Surprised', value: 'Surprised' }
];
export default function Write () {
  const {
    handleMenuClick,selectedKey
  } = useWrite()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className='mt-5 flex max-w-[1000px] mx-auto justify-between flex-col lg:flex-row'>
      <div className='p-2 w-full lg:min-h-[calc(100vh-120px)]'>
        <TextArea 
          allowClear 
          placeholder="Example: John, let's catch up on a call today to discuss our plans in detail." 
          autoSize={{ minRows: 5}} 
          showCount
          maxLength={3000}
          />  
        <Button type="primary" block className='mt-7'>
          Submit
        </Button>
      </div>
      <div className='p-2 w-full lg:max-w-80 border'>          
        <Card title="Social Profile" bordered={false} style={{ width: 300 }}>
          <Button ghost type="primary" block>
            Create
          </Button>
        </Card>
        <Space direction="vertical" className='mt-3 w-full'>            
          <Text type="secondary" className='ms-1'>Language...</Text>
          <Select
            defaultValue="english-us"
            style={{ width: '100%' }}
            // onChange={handleChange}
            options={[
              { value: 'english-us', label: 'English(U.S.)' },
              { value: 'english-uk', label: 'English(U.K.)' },
              { value: 'filipino', label: 'Filipino' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </Space>
        <Space direction="vertical" className='mt-3 w-full'>            
          <Text type="secondary" className='ms-1'>Text Format</Text>
          <Radio.Group options={options} optionType="button" />
        </Space>
        <Space direction="vertical" className='mt-3 w-full'>            
          <Text type="secondary" className='ms-1'>Text Size</Text>
          <Radio.Group options={sizeOptions} optionType="button" />
        </Space>
        <Space direction="vertical" className='mt-3 w-full'>            
          <Text type="secondary" className='ms-1'>Writing Style</Text>
          <Select
            defaultValue="Friendly"
            style={{ width: '100%' }}
            // onChange={handleChange}
            options={styleOptions}
          />
        </Space>
        <Space direction="vertical" className='mt-3 w-full'>            
          <Text type="secondary" className='ms-1'>Include Emoji</Text>
          <Radio.Group options={options} optionType="button" />
        </Space>
      </div>
    </div>
  )
}