import React from 'react';
import { Text } from 'react-native';
import S from './StyledComponents';
import { Props } from './types';

const ChatRoom = ({ route }: Props) => (
  <S.ChatRoomContainer>
    <Text>Chat Room: {route.params!.chatRoomId}</Text>
    <S.InputContainer>
      <S.TextInput placeholder="Type message here..." />
      <S.SendButton onPress={() => {}}>
        <Text>Send</Text>
      </S.SendButton>
    </S.InputContainer>
  </S.ChatRoomContainer>
);

export default ChatRoom;
