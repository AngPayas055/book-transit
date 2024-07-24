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

enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  DRIVER = 'driver',
}

export interface IUser extends Document {
  phone: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: UserRole;
  bookings: string[]; // Modify based on your app's booking model
  resetToken?: string;
  messages: any[]; 
  _id: string;
  __v: number
}

