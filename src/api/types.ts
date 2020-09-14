export interface ChatRoom {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: firebase.firestore.Timestamp;
  messages: [];
}

export interface ChatMessage {
  id: string;
  text: string;
  timestamp: string;
  user: string;
}
