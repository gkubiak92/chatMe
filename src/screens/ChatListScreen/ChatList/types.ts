import { StackNavigationProp } from '@react-navigation/stack';
import { ChatRoom } from 'api/types';
import { HomeStackParamList } from 'navigators/HomeStack';

export type ChatListNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ChatList'
>;

export interface ChatListProps {
  chatRooms: ChatRoom[];
}
