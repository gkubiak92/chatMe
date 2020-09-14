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

const InputContainer = styled.View`
  flex-direction: row;
  margin-top: auto;
  padding: 8px;
`;

const TextInput = styled.TextInput`
  flex: 10;
  margin-right: 8px;
  height: 40px;
  font-size: 18px;
  border-color: #e6e6e6;
  border-width: 2px;
`;

const SendButton = styled.TouchableHighlight`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: #ffcf00;
  color: #40424c;
`;

const ChatRoom = ({ route }: Props) => (
  <StyledView>
    <Text>Chat Room: {route.params.chatRoomId}</Text>
    <InputContainer>
      <TextInput placeholder="Type message here..." />
      <SendButton onPress={() => {}}>
        <Text>Send</Text>
      </SendButton>
    </InputContainer>
  </StyledView>
);

export default ChatRoom;
