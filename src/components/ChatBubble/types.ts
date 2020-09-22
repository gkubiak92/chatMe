import { ChatMessage } from 'api/types';

export interface Props {
  variant: 'me' | 'otherUser';
  chatMessage: ChatMessage;
}
