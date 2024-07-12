import axios, { AxiosRequestConfig } from "axios";
import { server } from "@/app/utils/constants";
import { captureException } from "@/app/utils/logger";

interface UserData {
  email: string;
  password: string;
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
  } catch (error) {
    captureException(error);
    throw new Error("Unable to login");
  }
};