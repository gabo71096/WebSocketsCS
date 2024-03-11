export interface Chat {
  roomName: string;
}

export interface ChatMessage {
  username: string;
  message: string;
  chat: Chat;
}

export interface Chats {
  roomName: Chat["roomName"];
  chatMessages: ChatMessage[];
}
