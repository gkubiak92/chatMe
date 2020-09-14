import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ChatListScreen from './ChatList/ChatListScreen';
import ChatRoom from './ChatRoom/ChatRoomScreen';

export type ChatStackParamList = {
  ChatList: undefined;
  ChatRoom: { chatRoomId: string };
};

const ChatStack = createStackNavigator<ChatStackParamList>();

const ChatStackScreen = () => (
  <ChatStack.Navigator initialRouteName="ChatList">
    <ChatStack.Screen
      name="ChatList"
      component={ChatListScreen}
      options={{ headerShown: false }}
    />
    <ChatStack.Screen name="ChatRoom" component={ChatRoom} />
  </ChatStack.Navigator>
);

export default ChatStackScreen;
