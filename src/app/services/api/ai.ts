import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { server } from "@/app/utils/constants";
import { ErrorResponse, messagePayload, MessageResponse } from "@/app/interface/chat";
import { WriteMessage } from "@/app/interface/chat";

const getToken = () => {
  return localStorage.getItem("token") || ''
}
export const generateMessageService = async (
  role: string,
  content: string
): Promise<MessageResponse | ErrorResponse> => {
  try {
    const data: messagePayload = { role, content };
    const options: AxiosRequestConfig = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
       },
      data,
    };
    const resp: AxiosResponse = await axios(`${server}/openAi`, options);    
    return {
      message: resp.data.message,
      data: resp.data.data,
    };
  } catch (error: any) {
    console.log('jsdfdsf',error.response.data.message)
    let errorMessage = 'An unexpected error occurred';
    let message = ""
    if (error.response) {
      console.error('Error response data:', error.response.data);
      errorMessage = error.response.data?.error || errorMessage;
    } else if (error.request) {
      console.error('Error request:', error.request);
      errorMessage = 'No response received from the server';
    } else {
      console.error('Error message:', error.message);
      errorMessage = error.message;
    }
    if(error.response.data.message){
      message = error.response.data.message
    }
    return { error: errorMessage, message};
  }
};
export const writeMessageService = async (
  language: string,
  textFormat: string,
  textSize: string,
  userMessage: string,
  withEmoji: boolean,
  writingStyle: string
): Promise<MessageResponse | ErrorResponse> => {
  try {
    const data: WriteMessage = { language, textFormat, textSize, userMessage, withEmoji, writingStyle };
    const options: AxiosRequestConfig = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
       },
      data,
    };
    const resp: AxiosResponse = await axios(`${server}/openAi/write`, options);    
    return {
      message: resp.data.message,
      data: resp.data.data,
    };
  } catch (error: any) {
    console.log('jsdfdsf',error.response.data.message)
    let errorMessage = 'An unexpected error occurred';
    let message = ""
    if (error.response) {
      console.error('Error response data:', error.response.data);
      errorMessage = error.response.data?.error || errorMessage;
    } else if (error.request) {
      console.error('Error request:', error.request);
      errorMessage = 'No response received from the server';
    } else {
      console.error('Error message:', error.message);
      errorMessage = error.message;
    }
    if(error.response.data.message){
      message = error.response.data.message
    }
    return { error: errorMessage, message};
  }
};
