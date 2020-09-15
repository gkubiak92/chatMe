import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from 'navigators/HomeStack';

export type ChatListNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'ChatList'
>;

export type Props = {
  navigation: ChatListNavigationProp;
};
