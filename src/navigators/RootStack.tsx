import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeStack from './HomeStack';
import ChatRoomScreen from '../screens/ChatRoom/ChatRoomScreen';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  ChatRoom:
    | {
        chatRoomId?: string;
        chatRoomName?: string;
      }
    | undefined;
};

type ChatRoomScreenOptions = {
  route: RouteProp<RootStackParamList, 'ChatRoom'>;
  navigation: any;
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
    <RootStack.Screen
      name="ChatRoom"
      component={ChatRoomScreen}
      options={({ route }: ChatRoomScreenOptions) => ({
        title: route.params ? route.params.chatRoomName! : route.name,
      })}
    />
  </RootStack.Navigator>
);

export default RootNavigator;
