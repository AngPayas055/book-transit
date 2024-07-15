export interface Message {
  id: number;
  content: string;
  role: string;
  // Add other properties as needed
}

export interface messagePayload {
  role: string
  content: string;
}
export interface MessageResponse {
  message: string;
  data: any;
}

export interface ErrorResponse {
  error: string;
}