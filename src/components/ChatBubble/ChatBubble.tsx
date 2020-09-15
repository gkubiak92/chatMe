import { ChatMessage } from 'api/types';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  variant: 'me' | 'otherUser';
  chatMessage: ChatMessage;
}

const ChatBubbleContainer = styled.View<Pick<Props, 'variant'>>`
  justify-content: flex-start;
  align-items: ${({ variant }) =>
    variant === 'me' ? 'flex-end' : 'flex-start'};
  margin-top: 12px;
`;

const Bubble = styled.Text<Pick<Props, 'variant'>>`
  padding: 8px;
  width: 300px;
  color: ${({ variant }) => (variant === 'me' ? '#40424c' : 'white')};
  background-color: ${({ variant }) =>
    variant === 'me' ? '#ffcf00' : '#40424c'};
`;

const ChatBubble = ({ variant, chatMessage }: Props) => (
  <ChatBubbleContainer variant={variant}>
    <Text>{chatMessage.user}</Text>
    <Bubble variant={variant}>{chatMessage.text}</Bubble>
  </ChatBubbleContainer>
);

export default ChatBubble;
