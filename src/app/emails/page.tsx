"use client"
import { Button, Card, Tooltip } from "antd";
import { useEmail } from "../hooks/useEmail";
import ReusableModal from "../components/reusable-components/modal";
import { DeleteOutlined, CopyOutlined } from '@ant-design/icons';

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
    value,
    handleDeletePromptById
  } = useEmail()

  return(
    <div className="w-full max-w-[1200px] mx-auto p-3 flex flex-wrap gap-2 justify-evenly">
      {messages.map((message) => (
        <div className="bg-white w-[300px] h-[300px] p-5 pt-3 rounded-xl shadow-lg" onClick={(e) => {showModal(message.generatedMessage,message.userMessage)}} key={message._id}>
          <div className="relative flex justify-between w-full gap-2 mb-2 items-center">
            <strong>-{message.textFormat}-</strong>
            <div className="flex gap-2">
              <Tooltip placement="bottom" title="Copy">
                <Button type="primary" shape="circle" icon={<CopyOutlined />} 
                  onClick={(e) => {e.stopPropagation(); handleCopyGeneratedMessage()}}
                />
              </Tooltip>
              <Tooltip placement="bottom" title="Delete">
                <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} 
                  onClick={(e) => {e.stopPropagation();handleDeletePromptById(message._id)}}
                  />
              </Tooltip>
            </div>
          </div>
          <div className=" ">
            <div className="border-b-2 border-Slate-400 w-full h-[32px] pb-3  truncate ...">
              <strong className="overflow-hidden text-base uppercase">{message.userMessage}</strong>
            </div>            
            <p className="h-[150px] mb-4 mt-2 overflow-hidden">
              <strong>Generated Message:</strong> <br /> <br /> {message.generatedMessage}
            </p>
            <p>{new Date(message.createdAt).toLocaleString()}</p>
          </div>
        </div>
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