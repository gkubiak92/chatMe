export interface Props {
  header: string;
  lastMessage: string;
  lastMessageTime?: firebase.firestore.Timestamp;
  handlePress: () => void;
}
