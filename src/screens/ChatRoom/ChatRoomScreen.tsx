import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigators/RootStack';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

type ChatRoomScreenRouteProp = RouteProp<RootStackParamList, 'ChatRoom'>;

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
