import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { convertSnapshotToArray } from '../../services/firebase/utils';
import { FlatList } from 'react-native-gesture-handler';
import { ChatRoom } from 'api/types';
import ChatListItem from '../../components/ChatListItem/ChatListItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { HomeStackParamList } from 'navigators/HomeStack';
import Loader from '../../components/Loader/Loader';
import S from './StyledComponents';
import { Props } from './types';

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

const ChatListScreen = ({ navigation }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  useEffect(() => {
    firestore()
      .collection('rooms')
      .get()
      .then((res) => {
        setChatRooms(convertSnapshotToArray(res) as ChatRoom[]);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <S.ChatListScreenContainer>
      {isLoading ? (
        <Loader size="large" color="red" />
      ) : (
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
      )}
    </S.ChatListScreenContainer>
  );
};

export default ChatListScreen;
