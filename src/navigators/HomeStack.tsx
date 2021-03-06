import React from 'react';
import { useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { authFailure } from '../redux/auth/authSlice';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import NullComponent from '../components/NullComponent/NullComponent';
import ChatListScreen from '../screens/ChatListScreen/ChatListScreen';
import { signOutFromGoogle } from '../services/firebase/utils';
import { HomeStackParamList } from './types';

const Tab = createBottomTabNavigator<HomeStackParamList>();

const HomeStackScreen = () => {
  const dispatch = useDispatch();
  const handleLogoutClick = async () => {
    try {
      await signOutFromGoogle();
      dispatch(authFailure());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="ChatList"
      tabBarOptions={{
        inactiveTintColor: '#E6E6E6',
        activeTintColor: '#40424c',
        inactiveBackgroundColor: '#40424c',
        activeBackgroundColor: '#ffcf00',
      }}>
      <Tab.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name="chat" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name="account" />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={NullComponent}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name="exit-to-app"
              onPress={handleLogoutClick}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStackScreen;
