import firestore from '@react-native-firebase/firestore';

export const getChatRoomMessages = (chatRoomId: string) =>
  firestore()
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

export const sendMessageToChat = (
  chatRoomId: string,
  text: string,
  user = 'me',
) =>
  firestore()
    .collection('rooms')
    .doc(chatRoomId)
    .collection('messages')
    .add({
      text,
      user,
      timestamp: firestore.Timestamp.fromDate(new Date(Date.now())),
    });
