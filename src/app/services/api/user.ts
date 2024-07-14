import axios, { AxiosRequestConfig } from "axios";
import { server } from "@/app/utils/constants";
import { captureException } from "@/app/utils/logger";
import { UserData, registerInterface } from "@/app/interface/user";

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
  } catch (error) {
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
  } catch (error) {
    captureException(error);
    throw new Error("Unable to login");
  }
}