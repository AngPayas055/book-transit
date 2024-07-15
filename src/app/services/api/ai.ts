import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { server } from "@/app/utils/constants";
import { ErrorResponse, messagePayload, MessageResponse } from "@/app/interface/chat";

export const generateMessageService = async (
  role: string,
  content: string
): Promise<MessageResponse | ErrorResponse> => {
  try {
    const data: messagePayload = { role, content };
    const options: AxiosRequestConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data,
    };
    const resp: AxiosResponse = await axios(`${server}/openAi`, options);    
    return {
      message: resp.data.message,
      data: resp.data.data,
    };
  } catch (error: any) {
    let errorMessage = 'An unexpected error occurred';
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
    return { error: errorMessage };
  }
};
