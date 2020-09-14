import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { convertSnapshotToArray } from '../../services/firebase/utils';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { ChatRoom } from 'api/types';
import ChatListItem from '../../components/ChatListItem/ChatListItem';

const StyledView = styled.View`
  flex: 1;
`;

const ChatScreen = () => {
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
    <StyledView>
      {isLoading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={chatRooms}
          renderItem={({ item }) => (
            <ChatListItem header={item.name} lastMessage={item.lastMessage} />
          )}
        />
      )}
    </StyledView>
  );
};

export default ChatScreen;
