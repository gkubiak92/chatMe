import React, { useState } from 'react';
import { Props } from './types';
import { Button, Modal, Pressable, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import { createChatRoom } from '../../../services/firebase/queries';
import S from './StyledComponents';

const handleAddClick = async (name: string, members: string[]) => {
  console.log('Added room');
  await createChatRoom(name, members);
};

const NewChatModal = ({ visible, onClose }: Props) => {
  const [chatRoomName, setchatRoomName] = useState('');

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <S.ModalContainer>
        <S.ModalForm>
          <Text>Start new conversation</Text>
          <TextInput
            placeholder="Chat name"
            value={chatRoomName}
            onChangeText={setchatRoomName}
          />
          <Button
            title="Add chat room"
            onPress={() => handleAddClick(chatRoomName, ['testid'])}
          />
          <S.CloseButton>
            <Pressable onPress={() => onClose()} hitSlop={20}>
              <MaterialCommunityIcons name="close" size={30} color="#40424c" />
            </Pressable>
          </S.CloseButton>
        </S.ModalForm>
      </S.ModalContainer>
    </Modal>
  );
};

export default NewChatModal;
