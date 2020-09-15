import React from 'react';
import { Pressable, Text } from 'react-native';
import {
  getFirebaseDate,
  getFirebaseTime,
} from '../../services/firebase/utils';
import styled from 'styled-components/native';

interface Props {
  header: string;
  lastMessage: string;
  lastMessageTime: firebase.firestore.Timestamp;
  handlePress: () => void;
}

const ListItemContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  border-bottom-color: gray;
  border-bottom-width: 1px;
`;

const ListItemContentColumn = styled.View`
  flex: 8;
  justify-content: space-between;
`;

const ListItemTimeColumn = styled.View`
  flex: 2;
  align-items: flex-end;
  justify-content: flex-start;
`;

const ChatHeader = styled.Text`
  font-size: 22px;
`;

const Subheader = styled.Text`
  font-size: 12px;
  margin-bottom: 8px;
`;

const ChatListItem: React.FC<Props> = ({
  header,
  lastMessage,
  lastMessageTime,
  handlePress,
}) => (
  <Pressable onPress={() => handlePress()}>
    <ListItemContainer>
      <ListItemContentColumn>
        <ChatHeader>{header}</ChatHeader>
        <Subheader>{lastMessage}</Subheader>
      </ListItemContentColumn>
      <ListItemTimeColumn>
        <Text>{getFirebaseDate(lastMessageTime)}</Text>
        <Text>{getFirebaseTime(lastMessageTime)}</Text>
      </ListItemTimeColumn>
    </ListItemContainer>
  </Pressable>
);

export default ChatListItem;
