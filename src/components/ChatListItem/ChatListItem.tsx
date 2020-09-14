import React from 'react';
import styled from 'styled-components/native';

interface Props {
  header: string;
  lastMessage?: string;
}

const ListItemContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  height: 68px;
  margin: 10px;
  border-bottom-color: gray;
  border-bottom-width: 1px;
`;

const ChatHeader = styled.Text`
  font-size: 24px;
`;

const Subheader = styled.Text`
  font-size: 12px;
`;

const ChatListItem = ({ header, lastMessage }: Props) => (
  <ListItemContainer>
    <ChatHeader>{header}</ChatHeader>
    {lastMessage ? <Subheader>{lastMessage}</Subheader> : null}
  </ListItemContainer>
);

export default ChatListItem;
