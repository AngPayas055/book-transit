import { useState } from "react";
import { Message } from "../interface/chat";
import { generateMessageService } from "../services/api/ai";

export function useCreateMessage () {
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSetUserInput = (e: any) => {
    setUserInput(e);
  };
  const handleGenerateMessage = async () => {
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
      console.log('jres',response)
      if ('error' in response) {
        setError(response.error);
      } else {
        const botMessage: Message = {
          id: messages.length + 2,
          role: 'assistant',
          content: response.message.content
        };

        setMessages([...messages, newMessage, botMessage]);
        console.log(messages)
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