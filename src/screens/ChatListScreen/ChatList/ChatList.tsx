import { ChatRoom } from 'api/types';
import ChatListItem from '../../../components/ChatListItem/ChatListItem';
import React from 'react';
import { FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../../navigators/types';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ChatListNavigationProp, ChatListProps } from './types';

const handleChatClick = (
  navigation: StackNavigationProp<HomeStackParamList, 'ChatList'>,
  { id, name }: ChatRoom,
) =>
  navigation.dispatch(
    CommonActions.navigate({
      name: 'ChatRoom',
      params: { chatRoomId: id, chatRoomName: name },
    }),
  );

const ChatList = ({ chatRooms }: ChatListProps) => {
  const navigation = useNavigation<ChatListNavigationProp>();

  return (
    <FlatList
      data={chatRooms}
      renderItem={({ item }) => (
        <ChatListItem
          header={item.name}
          lastMessage={item.lastMessage}
          lastMessageTime={item.lastMessageTime}
          handlePress={() => handleChatClick(navigation, item)}
        />
      )}
    />
  );
};

export default ChatList;
