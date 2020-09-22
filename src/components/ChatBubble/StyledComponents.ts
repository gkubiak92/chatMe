import styled from 'styled-components/native';
import { Props } from './types';

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

export default { ChatBubbleContainer, Bubble };
