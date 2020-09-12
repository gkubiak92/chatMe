import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ChatScreen from '../screens/ChatScreen/ChatScreen';

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Chat">
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppTabNavigator;
