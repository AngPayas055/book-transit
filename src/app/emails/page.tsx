"use client"
import { Button, Card } from "antd";
import { useEmail } from "../hooks/useEmail";
import ReusableModal from "../components/reusable-components/modal";

export default function Emails () {
  const {
    messages,
    showModal,
    isModalOpen,
    handleCancel,
    handleOk,
    handleCopyGeneratedMessage,
    handleCopyRequestMessage,
    generatedMEssage,
    value
  } = useEmail()

  return(
    <div className="w-full max-w-[1200px] mx-auto p-3 flex flex-wrap gap-2 justify-evenly">
      {messages.map((message) => (
        <Card onClick={(e) => {showModal(message.generatedMessage,message.userMessage)}} bordered={false} style={{ width: 280, height: 280}} key={message._id}>
          <div className="border-b-2 border-Slate-400 pb-3 h-[32px] overflow-hidden text-base uppercase ">
            <strong>{message.userMessage}</strong>
            </div>
          <p className="h-[150px] mb-4 overflow-ellipsis overflow-hidden ... mt-2">
            <strong>Generated Message:</strong> <br /> <br /> {message.generatedMessage}
          </p>
          <p>{new Date(message.createdAt).toLocaleString()}</p>
        </Card>
      ))}  
      <ReusableModal
        isOpen={isModalOpen}
        onClose={handleCancel}
        title="Email / Message"
        width={1200}
      >
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          {generatedMEssage.split('\n').map((line, index) => (
            <div key={index}>{line}<br /></div>
          ))}
        </div>
        <div className='flex justify-end w-full gap-3'>        
          <Button onClick={handleCopyRequestMessage} className='mt-7'>
            Copy Request
          </Button>         
          <Button onClick={handleCopyGeneratedMessage} type="primary" className='mt-7'>
            Copy
          </Button>
        </div>
      </ReusableModal>    
    </div>
  )
}