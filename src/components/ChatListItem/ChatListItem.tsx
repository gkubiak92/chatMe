import React from 'react';
import { Pressable, Text } from 'react-native';
import S from './StyledComponents';
import {
  getFirebaseDate,
  getFirebaseTime,
} from '../../services/firebase/utils';

interface Props {
  header: string;
  lastMessage: string;
  lastMessageTime?: firebase.firestore.Timestamp;
  handlePress: () => void;
}

const ChatListItem: React.FC<Props> = ({
  header,
  lastMessage,
  lastMessageTime,
  handlePress,
}) => (
  <Pressable onPress={() => handlePress()}>
    <S.ListItemContainer>
      <S.ListItemContentColumn>
        <S.ChatHeader>{header}</S.ChatHeader>
        <S.Subheader>{lastMessage}</S.Subheader>
      </S.ListItemContentColumn>
      {lastMessageTime ? (
        <S.ListItemTimeColumn>
          <Text>{getFirebaseDate(lastMessageTime)}</Text>
          <Text>{getFirebaseTime(lastMessageTime)}</Text>
        </S.ListItemTimeColumn>
      ) : null}
    </S.ListItemContainer>
  </Pressable>
);

export default ChatListItem;
