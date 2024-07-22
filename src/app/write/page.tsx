"use client"
import React from 'react';
import { SnippetsOutlined, FormOutlined } from '@ant-design/icons';
import { Button, Card, Input, Layout, Radio, Select, Space, Typography } from 'antd';
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
const languageOptions = [
  { value: 'english-us', label: 'English(U.S.)' },
  { value: 'english-uk', label: 'English(U.K.)' },
  { value: 'filipino', label: 'Filipino' },
  { value: 'disabled', label: 'Disabled', disabled: true },
]
const sizeOptions = [
  { label: 'Short', value: 'Short' },
  { label: 'Medium', value: 'Medium' },
  { label: 'Long', value: 'Long' }
];
const emojiOptions = [
  { label: 'With emoji', value: true },
  { label: 'No emoji', value: false }
];
const styleOptions = [
  { label: 'Formal', value: 'Formal' },
  { label: 'Friendly', value: 'Friendly' },
  { label: 'Brutal', value: 'Brutal' },
  { label: 'Persuasive', value: 'Persuasive' },
  { label: 'Expert', value: 'Expert' },
  { label: 'Joyful', value: 'Joyful' },
  { label: 'Inspirational', value: 'Inspirational' },
  { label: 'Informative', value: 'Informative' },
  { label: 'Thoughtful', value: 'Thoughtful' },
  { label: 'Cautionary', value: 'Cautionary' },
  { label: 'Grieved', value: 'Grieved' },
  { label: 'Exciting', value: 'Exciting' },
  { label: 'Loving', value: 'Loving' },
  { label: 'Confident', value: 'Confident' },
  { label: 'Surprised', value: 'Surprised' }
];
export default function Write () {
  const {
    selectedLanguage,
    handleLanguageChange,
    handletextFormatChange,
    handletextSizeChange,
    selectedTextFormat,
    selectedTextSize,
    handleWritingStyleChange,
    selectedWritingStyle,
    handleIfEmojiChange,
    selectedIfEmoji,
    handleSubmit,
    setValue
  } = useWrite()

  return (
    <div className='mt-5 flex max-w-[1000px] mx-auto justify-between flex-col lg:flex-row'>
      <div className='p-2 w-full lg:min-h-[calc(100vh-120px)]'>
        <TextArea 
          allowClear 
          placeholder="Example: John, let's catch up on a call today to discuss our plans in detail." 
          autoSize={{ minRows: 5}} 
          showCount
          maxLength={3000}
          onChange={(e) => setValue(e.target.value)}
          />  
        <Button onClick={handleSubmit} type="primary" block className='mt-7'>
          Submit
        </Button>
      </div>
      <div className='p-2 w-full lg:max-w-80 border'>          
        <Card bordered={false} style={{ width: '100%' }}> 
          <Space direction="vertical" className='w-full'>
            <Text type="secondary" className='ms-1'>Social Profile</Text>
            <Button ghost type="primary" block>
              Create
            </Button>
          </Space>  
        </Card>
        <Space direction="vertical" className='mt-3 w-full'>            
          <Text type="secondary" className='ms-1'>Language...</Text>
          <Select
            defaultValue={selectedLanguage}
            style={{ width: '100%' }}
            onChange={handleLanguageChange}
            options={languageOptions}
          />
        </Space>
        <Space direction="vertical" className='mt-3 w-full'>            
          <Text type="secondary" className='ms-1'>Text Format</Text>
          <Radio.Group 
            onChange={handletextFormatChange} 
            options={options} 
            optionType="button" 
            defaultValue={selectedTextFormat}
            />
        </Space>
        <Space direction="vertical" className='mt-3 w-full'>            
          <Text type="secondary" className='ms-1'>Text Size</Text>
          <Radio.Group 
            onChange={handletextSizeChange} 
            options={sizeOptions} 
            optionType="button" 
            defaultValue={selectedTextSize}
            />
        </Space>
        <Space direction="vertical" className='mt-3 w-full'>            
          <Text type="secondary" className='ms-1'>Writing Style</Text>
          <Select
            onChange={handleWritingStyleChange}
            defaultValue={selectedWritingStyle}
            style={{ width: '100%' }}
            options={styleOptions}
          />
        </Space>
        <Space direction="vertical" className='mt-3 w-full'>            
          <Text type="secondary" className='ms-1'>Include Emoji</Text>
          <Radio.Group 
            onChange={handleIfEmojiChange}
            options={emojiOptions} 
            defaultValue={selectedIfEmoji}
            optionType="button" 
            />
        </Space>
      </div>
    </div>
  )
}