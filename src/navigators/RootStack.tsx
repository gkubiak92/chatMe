import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeStack from './HomeStack';
import ChatRoomScreen from '../screens/ChatRoom/ChatRoomScreen';

export type RootStackParamList = {
  Home: undefined;
  ChatRoom: {
    chatRoomId: string;
  };
};

const RootStack = createStackNavigator();

const RootNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Home"
      component={HomeStack}
      options={{
        headerShown: false,
      }}
    />
    <RootStack.Screen name="ChatRoom" component={ChatRoomScreen} />
  </RootStack.Navigator>
);

export default RootNavigator;
