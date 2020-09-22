import ChatListItem from '../../../components/ChatListItem/ChatListItem';
import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChatListNavigationProp, ChatListProps } from './types';
import { navigateToChatRoom } from '../utils';

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
          handlePress={() => navigateToChatRoom(navigation, item.id, item.name)}
        />
      )}
    />
  );
};

export default ChatList;
