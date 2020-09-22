import React from 'react';
import { Text } from 'react-native';
import { Props } from './types';
import S from './StyledComponents';

const ChatBubble = ({ variant, chatMessage }: Props) => (
  <S.ChatBubbleContainer variant={variant}>
    <Text>{chatMessage.user}</Text>
    <S.Bubble variant={variant}>{chatMessage.text}</S.Bubble>
  </S.ChatBubbleContainer>
);

export default ChatBubble;
