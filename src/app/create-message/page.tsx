"use client"
import styles from './create-message.module.css'
import { Alert, Button, Card, Col, Input, Row, Spin } from "antd";
import { useCreateMessage } from "../hooks/useCreateMessage";
import { UpCircleOutlined, AuditOutlined, PicRightOutlined, QuestionCircleOutlined, RadarChartOutlined } from '@ant-design/icons';

export default function CreateMessage () {
  const {
    userInput,
    messages,
    loading,
    error,
    handleSetUserInput,
    handleGenerateMessage
  } = useCreateMessage()
  const { Search } = Input;
  return (
    <div className={styles.messagePageCont}> 
      <div className={styles.messageContainer}>
      {error && <Alert message={error} type="error" showIcon className='mt-3 mb-3'/>}
        {messages.length == 0 && 
          <span className='flex flex-wrap gap-3 pt-5 max-w-[700px] mx-auto'>
            <Card className='cursor-pointer' onClick={(e) => handleSetUserInput('Fun fact about Roman Empire')} style={{ minHeight: '120px', maxWidth: '33%' }} bordered={false}>
              <PicRightOutlined style={{color: '#76D0EB', fontSize: '1.3rem', marginBottom: '0.8rem'}} /> <br />
              Fun fact about Roman Empire
            </Card>
            <Card className='cursor-pointer' onClick={(e) => handleSetUserInput("What to do with kids' art")} style={{ minHeight: '120px', maxWidth: '33%'  }} bordered={false}>
              <RadarChartOutlined style={{color: '#212121', fontSize: '1.3rem', marginBottom: '0.8rem'}} /> <br />
              What to do with kids' art
            </Card>
            <Card className='cursor-pointer' onClick={(e) => handleSetUserInput('Quiz me on world capitals')} style={{ minHeight: '120px', maxWidth: '33%'  }} bordered={false}>
              <QuestionCircleOutlined style={{color: '#E2C541', fontSize: '1.3rem', marginBottom: '0.8rem'}} /> <br />
              Quiz me on world capitals
            </Card>
          </span>
        }
        {messages.map((message) => (
          <div key={message.id}> {/* Add unique key here */}
            {message.role === "user" && (
              <div className={styles.userMessageCont}>
                <span className={styles.userMessageContent}>{message.content}</span>
              </div>
            )}
            {message.role === "assistant" && (
              <div className={styles.assistantMessageCont}>
                <span className='me-3 mt-3'>
                  <Button type="primary" icon={<PicRightOutlined />}>  
                  </Button>
                </span>
                <span className={styles.assistantMessageContent}>
                  {message.content.split('\n').map((line, index) => (
                    <div key={index}>{line}<br /></div>
                  ))}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <Input 
        disabled={loading}
        style={{ borderRadius: '50px' , position: 'sticky', bottom: '0'}}
        onChange={(e) => handleSetUserInput(e.target.value)} 
        placeholder="Message ChatAi"
        prefix={<AuditOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={
          <Button disabled={loading} onClick={(e) => handleGenerateMessage()} 
          type="primary" shape="circle" 
          icon={loading ? <Spin/> : <UpCircleOutlined />} 
          />
        }
        value={userInput}
      />
    </div>
  )
}