import { ChatMessage } from 'api/types';
import Loader from '../../components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { convertSnapshotToArray } from '../../services/firebase/utils';
import S from './StyledComponents';
import { Props } from './types';
import ChatBubble from '../../components/ChatBubble/ChatBubble';
import {
  getChatRoomMessages,
  listenToNewMessages,
  sendMessageToChat,
} from '../../services/firebase/queries';

const ChatRoom = ({ route }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMsg, setInputMsg] = useState('');
  const chatRoomId = route.params!.chatRoomId!;

  useEffect(() => {
    getChatRoomMessages(chatRoomId).then((res) => {
      setMessages(convertSnapshotToArray(res));
      setIsLoading(false);
    });
  }, [chatRoomId]);

  useEffect(() => {
    const subscriber = listenToNewMessages(chatRoomId).onSnapshot((doc) => {
      setMessages(convertSnapshotToArray(doc));
    });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [chatRoomId]);

  const sendMessage = () =>
    sendMessageToChat(chatRoomId, inputMsg).then(() => {
      setInputMsg('');
    });

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <S.ScrollContainer>
        <S.ChatRoomFlatList
          inverted
          data={messages}
          renderItem={({ item }: { item: ChatMessage }) =>
            item.user === 'me' ? (
              <ChatBubble key={item.id} chatMessage={item} variant="me" />
            ) : (
              <ChatBubble
                key={item.id}
                chatMessage={item}
                variant="otherUser"
              />
            )
          }
        />
      </S.ScrollContainer>
      <S.InputContainer>
        <S.TextInput
          placeholder="Type message here..."
          value={inputMsg}
          onChangeText={(text) => setInputMsg(text)}
        />
        <S.SendButton onPress={() => sendMessage()}>
          <Text>Send</Text>
        </S.SendButton>
      </S.InputContainer>
    </>
  );
};

export default ChatRoom;
