export interface ChatRoom {
  id: string;
  name: string;
  members: string[];
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
