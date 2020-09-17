import React, { useEffect, useState } from 'react';
import { convertSnapshotToArray } from '../../services/firebase/utils';
import { ChatRoom } from 'api/types';
import Loader from '../../components/Loader/Loader';
import S from './StyledComponents';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import ChatList from './ChatList/ChatList';
import { getChatRooms } from '../../services/firebase/queries';
import NewChatModal from './NewChatModal/NewChatModal';

const ChatListScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    getChatRooms()
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
          <NewChatModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
          <FloatingActionButton
            iconName="plus"
            onPress={() => setModalVisible(true)}
          />
        </>
      )}
    </S.ChatListScreenContainer>
  );
};

export default ChatListScreen;
