import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { server } from "@/app/utils/constants";
import { captureException } from "@/app/utils/logger";
import { UserData, registerInterface } from "@/app/interface/user";

const getToken = () => {
  return localStorage.getItem("token") || ''
}

export const userSignIn = async (email: string, password: string) => {
  try {
    const data: UserData = { email, password };
    const options: AxiosRequestConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data,
    };
    const resp = await axios(`${server}/users/login`, options);
    return {
      message: resp.data.message,
      data: resp.data.data
    };
  } catch (error:any) {
    if(error.response.data.message){
      return {
        message: error.response.data.message,
      }
    }
    captureException(error);
    throw new Error("Unable to login");
  }
};

export const userSignUp = async (signupObj:registerInterface) => {
  try {
    const data: registerInterface = signupObj;
    const options: AxiosRequestConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data,
    };
    const resp = await axios(`${server}/users`, options);
    return {
      message: resp.data.message,
      data: resp.data.data
    };
  } catch (error:any) {
    if(error.response.data.message){
      return {
        message: error.response.data.message,
      }
    }
    captureException(error);
    throw new Error("Unable to login");
  }
}

export const getResetLink = async (userEmail: string) => {
  try {
    const data = { email: userEmail };
    const options: AxiosRequestConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data,
    };
    const resp = await axios(`${server}/users/forgotpassword`, options);
    return resp.data
  } catch (error:any) {
    if(error.response){
      return error.response
    }
    captureException(error);
    throw new Error("Unable to send reset link");
  }
}

export const resetNewPassword = async (pass: string, confirmPass: string, token: string) => {
  try {
    const data = { 
      password: pass, 
      confirmPassword: confirmPass, 
      resetToken: token };
    const options: AxiosRequestConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data,
    };
    const resp = await axios(`${server}/users/resetPassword`, options);
    return resp.data
  } catch (error:any) {
    if(error.response){
      return error.response
    }
    captureException(error);
    throw new Error("Unable to send reset link");
  }

}

export const getPrompts = async () => {
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
       }
    };
    const resp = await axios(`${server}/users/messages`, options);
    return resp.data
  } catch (error:any) {
    if(error.response){
      return error.response
    }
    captureException(error);
    throw new Error("Unable to send reset link");
  }
}