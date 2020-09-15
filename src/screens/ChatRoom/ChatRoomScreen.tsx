import firestore from '@react-native-firebase/firestore';
import { ChatMessage } from 'api/types';
import Loader from '../../components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { convertSnapshotToArray } from '../../services/firebase/utils';
import S from './StyledComponents';
import { Props } from './types';
import ChatBubble from '../../components/ChatBubble/ChatBubble';
import { ScrollView } from 'react-native-gesture-handler';

const ChatRoom = ({ route }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMsg, setInputMsg] = useState('');

  useEffect(() => {
    firestore()
      .collection('rooms')
      .doc(route.params!.chatRoomId)
      .collection('messages')
      .get()
      .then((res) => {
        setMessages(convertSnapshotToArray(res));
        setIsLoading(false);
      });
  }, [route.params]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('rooms')
      .doc(route.params!.chatRoomId)
      .collection('messages')
      .onSnapshot((doc) => {
        setMessages(convertSnapshotToArray(doc));
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [route.params]);

  const sendMessage = (text: string, user = 'me') => {
    firestore()
      .collection('rooms')
      .doc(route.params!.chatRoomId)
      .collection('messages')
      .add({
        text,
        user,
        timestamp: Date.now(),
      })
      .then(() => {
        setInputMsg('');
      });
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <S.ScrollContainer>
        <ScrollView>
          <S.ChatRoomContainer>
            {messages.map((msg) =>
              msg.user === 'me' ? (
                <ChatBubble key={msg.id} chatMessage={msg} variant="me" />
              ) : (
                <ChatBubble
                  key={msg.id}
                  chatMessage={msg}
                  variant="otherUser"
                />
              ),
            )}
          </S.ChatRoomContainer>
        </ScrollView>
      </S.ScrollContainer>

      <S.InputContainer>
        <S.TextInput
          placeholder="Type message here..."
          value={inputMsg}
          onChangeText={(text) => setInputMsg(text)}
        />
        <S.SendButton onPress={() => sendMessage(inputMsg)}>
          <Text>Send</Text>
        </S.SendButton>
      </S.InputContainer>
    </>
  );
};

export default ChatRoom;
