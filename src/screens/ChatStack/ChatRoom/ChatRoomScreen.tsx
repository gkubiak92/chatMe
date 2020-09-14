import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { ChatStackParamList } from '../ChatStackScreen';

type ChatRoomScreenRouteProp = RouteProp<ChatStackParamList, 'ChatRoom'>;

type Props = {
  route: ChatRoomScreenRouteProp;
};

const StyledView = styled.View`
  flex: 1;
`;

const ChatRoom = ({ route }: Props) => (
  <StyledView>
    <Text>Chat Room: {route.params.chatRoomId}</Text>
  </StyledView>
);

export default ChatRoom;
