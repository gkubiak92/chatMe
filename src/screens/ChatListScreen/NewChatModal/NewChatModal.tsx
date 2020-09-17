import React, { useState } from 'react';
import { Button, Modal, Pressable, Text } from 'react-native';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import { createChatRoom } from '../../../services/firebase/queries';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ModalForm = styled.View`
  justify-content: space-evenly;
  padding: 12px;
  width: 300px;
  height: 240px;
  background-color: white;
`;

const CloseButton = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const handleAddClick = async (name: string, members: string[]) => {
  console.log('Added room');
  await createChatRoom(name, members);
};

const NewChatModal = ({ visible, onClose }: Props) => {
  const [chatRoomName, setchatRoomName] = useState('');

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <ModalContainer>
        <ModalForm>
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
          <CloseButton>
            <Pressable onPress={() => onClose()} hitSlop={20}>
              <MaterialCommunityIcons name="close" size={30} color="#40424c" />
            </Pressable>
          </CloseButton>
        </ModalForm>
      </ModalContainer>
    </Modal>
  );
};

export default NewChatModal;
