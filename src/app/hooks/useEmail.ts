import { useEffect, useState } from "react"
import { getPrompts } from "../services/api/user"
import { generatedMessage } from "../interface/user";

export function useEmail () {
  const [messages, setMessages] = useState<generatedMessage[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [generatedMEssage, setGeneratedMEssage] = useState<string>('');
  const [value, setValue] = useState('');
  
  useEffect(() => {
    getEmailsMessages()
  },[] )

  const getEmailsMessages = async () => {
    const userMessages = await getPrompts()
    setMessages(userMessages.messages)
    console.log(userMessages)
  }
  const showModal = (generatedMessage: string, userMessage: string) => {
    setGeneratedMEssage(generatedMessage)
    setValue(userMessage)
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCopyGeneratedMessage = async () => {
    const textarea = document.createElement('textarea');
    textarea.value = generatedMEssage;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  const handleCopyRequestMessage = async () => {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  return {
    getEmailsMessages,
    messages,
    showModal,
    isModalOpen,
    handleCancel,
    handleOk,
    handleCopyGeneratedMessage,
    handleCopyRequestMessage,
    generatedMEssage,
    value
  }
}