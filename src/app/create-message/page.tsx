"use client"
import styles from './create-message.module.css'
import { Alert, Button, Input, Spin } from "antd";
import { useCreateMessage } from "../hooks/useCreateMessage";
import { UpCircleOutlined, AuditOutlined, PicRightOutlined } from '@ant-design/icons';

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
    <div className="w-full max-w-[760px] mx-auto p-3"> 
    {error && <Alert message={error} type="error" showIcon />}
    
    <div className={styles.messageContainer}>
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
              <span className={styles.assistantMessageContent}>{message.content}</span>
            </div>
          )}
        </div>
      ))}
    </div>
      <Input 
        disabled={loading}
        style={{ borderRadius: '50px' , position: 'sticky', bottom: '15px'}}
        onChange={(e) => handleSetUserInput(e.target.value)} 
        placeholder="Message ChatAi"
        prefix={<AuditOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={
          <Button disabled={loading} onClick={(e) => handleGenerateMessage()} 
          type="primary" shape="circle" 
          icon={loading ? <Spin/> : <UpCircleOutlined />} 
          />
        }
      />
    </div>
  )
}