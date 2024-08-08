import { RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import { WriteMessage } from "../interface/chat";
import { funnyLoadingPhrases } from "../utils/constants";
import { useNotification } from "../context/notificationContext";
import { writeMessageService } from "../services/api/ai";
import { useRouter } from "next/navigation";

export function useWrite () {
  
  const [selectedLanguage, setSelectedLanguage] = useState<string>('english-uk');
  const [selectedTextFormat, setSelectedTextFormat] = useState<string>('Email');
  const [selectedTextSize, setSelectedTextSize] = useState<string>('Medium');
  const [selectedWritingStyle, setSelectedWritingStyle] = useState<string>('Friendly');
  const [selectedIfEmoji, setselectedIfEmoji] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [value, setValue] = useState('');
  const [generatedMEssage, setGeneratedMEssage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { openNotificationWithIcon } = useNotification();
  const router = useRouter()

  useEffect(() => {
    console.log('selectedTextSize', selectedTextSize);
  },[selectedTextSize])

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value)
  };
  const handletextFormatChange = async (e: RadioChangeEvent) => {
    setSelectedTextFormat(e.target.value)
  };
  const handletextSizeChange = async (e: RadioChangeEvent) => {
    setSelectedTextSize(e.target.value)
  };
  const handleWritingStyleChange = (value: string) => {
    setSelectedWritingStyle(value)
  };
  const handleIfEmojiChange = async (e: RadioChangeEvent) => {
    setselectedIfEmoji(e.target.value)
  };
  const handleSubmit = async () => {
    setIsLoading(true)
    const messageData:WriteMessage = {
      userMessage: value,
      language: selectedLanguage,
      textFormat: selectedTextFormat,
      textSize: selectedTextSize,
      writingStyle: selectedWritingStyle,
      withEmoji: selectedIfEmoji
    }
    console.log('J',messageData)
    const randomIndex = Math.floor(Math.random() * funnyLoadingPhrases.length);
    const funnyPhrase = funnyLoadingPhrases[randomIndex];
    openNotificationWithIcon('info', 'Info', funnyPhrase );
    try {
      const response:any = await writeMessageService(
        selectedLanguage, 
        selectedTextFormat, 
        selectedTextSize, 
        value, 
        selectedIfEmoji, 
        selectedWritingStyle
      );
      if ('error' in response) {
        if (response.message == 'Unauthorized'){
          openNotificationWithIcon('error', 'Error', 'You must be logged in to access this feature.' );
          router.push('/signin');
        }
      } else {
        console.log('jres',response)
        setGeneratedMEssage(response.data)
        showModal()
      }
      setIsLoading(false)      
    } catch (err) {
      console.log('jres',err)
      setIsLoading(false)
    } finally {
      // setLoading(false);
      // setUserInput("");
      setIsLoading(false)
    }
  }  
  const handleCopyGeneratedMessage = async () => {
    const textarea = document.createElement('textarea');
    textarea.value = generatedMEssage;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  const handleRequestMessage = async () => {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  return {
    selectedLanguage,
    handleLanguageChange,
    selectedTextFormat,
    selectedTextSize,
    handletextFormatChange,
    handletextSizeChange,
    handleWritingStyleChange,
    selectedWritingStyle,
    handleIfEmojiChange,
    selectedIfEmoji,
    handleSubmit,
    setValue,
    showModal,
    isModalOpen,
    handleCancel,
    handleOk,
    generatedMEssage,
    handleCopyGeneratedMessage,
    handleRequestMessage,
    isLoading
  }
}