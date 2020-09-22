import React, { useState } from 'react';
import { Props } from './types';
import { Button, Modal, Pressable, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import { createChatRoom } from '../../../services/firebase/queries';
import S from './StyledComponents';
import { useNavigation } from '@react-navigation/native';
import { ChatListNavigationProp } from '../ChatList/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from 'navigators/types';
import { navigateToChatRoom } from '../utils';

const handleAddClick = async (
  navigation: StackNavigationProp<HomeStackParamList, 'ChatList'>,
  name: string,
  members: string[],
) => {
  const addedRoomRef = await createChatRoom(name, members);
  const { id } = await addedRoomRef.get();
  navigateToChatRoom(navigation, id, name);
};

const NewChatModal = ({ visible, onSubmit, onClose }: Props) => {
  const [chatRoomName, setchatRoomName] = useState('');
  const navigation = useNavigation<ChatListNavigationProp>();

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
            onPress={async () => {
              await handleAddClick(navigation, chatRoomName, ['testid']);
              onSubmit();
              setchatRoomName('');
            }}
          />
          <S.CloseButton>
            <Pressable
              onPress={() => {
                onClose();
                setchatRoomName('');
              }}
              hitSlop={20}>
              <MaterialCommunityIcons name="close" size={30} color="#40424c" />
            </Pressable>
          </S.CloseButton>
        </S.ModalForm>
      </S.ModalContainer>
    </Modal>
  );
};

export default NewChatModal;
