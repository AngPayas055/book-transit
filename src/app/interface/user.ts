export interface UserData {
  email: string;
  password: string;
}

export interface registerInterface {
  email: string;
  password: string;
  phone: string;
  firstName: string;
  lastName: string;
}
export interface generatedMessage {
  _id: string;
  userMessage: string;
  generatedMessage: string;
  language: string;
  textFormat: string;
  textSize: string;
  writingStyle: string;
  withEmoji: boolean;
  createdAt: string;
}
