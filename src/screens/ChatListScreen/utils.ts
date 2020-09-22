import { CommonActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from 'navigators/types';

export const navigateToChatRoom = (
  navigation: StackNavigationProp<HomeStackParamList, 'ChatList'>,
  chatRoomId: string,
  chatRoomName: string,
) =>
  navigation.dispatch(
    CommonActions.navigate({
      name: 'ChatRoom',
      params: { chatRoomId, chatRoomName },
    }),
  );
