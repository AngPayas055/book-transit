import { RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import { WriteMessage } from "../interface/chat";
import { funnyLoadingPhrases } from "../utils/constants";
import { useNotification } from "../context/notificationContext";
import { writeMessageService } from "../services/api/ai";
import { useRouter } from "next/navigation";

export function useWrite () {
  
  const [selectedLanguage, setSelectedLanguage] = useState<string>('english-uk');
  const [selectedTextFormat, setSelectedTextFormat] = useState<string>('Message');
  const [selectedTextSize, setSelectedTextSize] = useState<string>('Short');
  const [selectedWritingStyle, setSelectedWritingStyle] = useState<string>('Friendly');
  const [selectedIfEmoji, setselectedIfEmoji] = useState<boolean>(true);
  const [value, setValue] = useState('');
  const { openNotificationWithIcon } = useNotification();
  const router = useRouter()

  useEffect(() => {
    console.log('selectedTextSize', selectedTextSize);
  },[selectedTextSize])

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
      }
    } catch (err) {
      console.log('jres',err)
    } finally {
      // setLoading(false);
      // setUserInput("");
    }
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
    setValue
  }
}