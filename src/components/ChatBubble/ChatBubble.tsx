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
  margin-bottom: 12px;
`;

const Bubble = styled.View<Pick<Props, 'variant'>>`
  padding: 8px;
  width: 300px;
  background-color: ${({ variant }) =>
    variant === 'me' ? '#ffcf00' : '#40424c'};
`;

const BubbleText = styled.Text`
  color: white;
`;

const ChatBubble = ({ variant, chatMessage }: Props) => (
  <ChatBubbleContainer variant={variant}>
    <Text>{chatMessage.user}</Text>
    <Bubble variant={variant}>
      <BubbleText>{chatMessage.text}</BubbleText>
    </Bubble>
  </ChatBubbleContainer>
);

export default ChatBubble;
