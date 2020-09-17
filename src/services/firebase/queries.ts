import firestore from '@react-native-firebase/firestore';
import { ChatRoom } from 'api/types';

export const getChatRoomMessages = async (chatRoomId: string) =>
  await firestore()
    .collection('rooms')
    .doc(chatRoomId)
    .collection('messages')
    .orderBy('timestamp', 'desc')
    .get();

export const listenToNewMessages = (chatRoomId: string) =>
  firestore()
    .collection('rooms')
    .doc(chatRoomId)
    .collection('messages')
    .orderBy('timestamp', 'desc');

export const sendMessageToChat = async (
  chatRoomId: string,
  text: string,
  user = 'me',
) =>
  await firestore()
    .collection('rooms')
    .doc(chatRoomId)
    .collection('messages')
    .add({
      text,
      user,
      timestamp: firestore.Timestamp.fromDate(new Date(Date.now())),
    });

export const createChatRoom = async (name: string, members: string[]) => {
  const chatRoom: Partial<ChatRoom> = {
    name,
    lastMessage: '',
    members,
  };
  await firestore().collection('rooms').add(chatRoom);
};
