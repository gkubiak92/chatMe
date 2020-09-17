import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { convertSnapshotToArray } from '../../services/firebase/utils';
import { ChatRoom } from 'api/types';
import Loader from '../../components/Loader/Loader';
import S from './StyledComponents';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import ChatList from './ChatList/ChatList';

const ChatListScreen = () => {
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
        <>
          <ChatList chatRooms={chatRooms} />
          <FloatingActionButton
            iconName="plus"
            onPress={() => console.log('floating button')}
          />
        </>
      )}
    </S.ChatListScreenContainer>
  );
};

export default ChatListScreen;
