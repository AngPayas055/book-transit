import { RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import { WriteMessage } from "../interface/chat";

export function useWrite () {
  
  const [selectedLanguage, setSelectedLanguage] = useState<string>('english-uk');
  const [selectedTextFormat, setSelectedTextFormat] = useState<string>('Message');
  const [selectedTextSize, setSelectedTextSize] = useState<string>('Short');
  const [selectedWritingStyle, setSelectedWritingStyle] = useState<string>('Friendly');
  const [selectedIfEmoji, setselectedIfEmoji] = useState<boolean>(true);
  const [value, setValue] = useState('');

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
  const handleSubmit = () => {
    const messageData:WriteMessage = {
      userMessage: value,
      language: selectedLanguage,
      textFormat: selectedTextFormat,
      textSize: selectedTextSize,
      writingStyle: selectedWritingStyle,
      withEmoji: selectedIfEmoji
    }
    console.log('J',messageData)
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