import { useState } from "react";
import { Message } from "../interface/chat";
import { generateMessageService } from "../services/api/ai";
import { funnyLoadingPhrases } from "../utils/constants";
import { useNotification } from "../context/notificationContext";
import { useRouter } from "next/navigation";

export function useCreateMessage () {
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const { openNotificationWithIcon } = useNotification();
  const router = useRouter()

  const handleSetUserInput = (e: any) => {
    setUserInput(e);
  };
  const handleGenerateMessage = async () => {
    const randomIndex = Math.floor(Math.random() * funnyLoadingPhrases.length);
    const funnyPhrase = funnyLoadingPhrases[randomIndex];
    openNotificationWithIcon('info', 'Info', funnyPhrase );
    if (!userInput.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const newMessage: Message = {
        id: messages.length + 1,
        role: 'user',
        content: userInput
      };      
      setMessages([...messages, newMessage]);
      const response:any = await generateMessageService('user', userInput);
      if ('error' in response) {
        setError(response.error);
        if (response.message == 'Unauthorized'){
          openNotificationWithIcon('error', 'Error', 'You must be logged in to access this feature.' );
          router.push('/signin');
        }
      } else {
        const botMessage: Message = {
          id: messages.length + 2,
          role: 'assistant',
          content: response.message.content
        };
        setMessages([...messages, newMessage, botMessage]);
        setUserInput("");
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };
  
  return {
    handleSetUserInput,
    handleGenerateMessage,
    messages,
    userInput,
    loading,
    error
  }
}