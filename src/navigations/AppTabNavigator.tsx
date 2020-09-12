import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { authFailure } from '../redux/auth/authSlice';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';


const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    dispatch(authFailure());
  }
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Chat" tabBarOptions={{ activeTintColor: "#ffcf00", }} >
        <Tab.Screen name="Chat" component={ChatScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                color={color}
                size={size}
                name="chat" />
            )
          }} />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                color={color}
                size={size}
                name="account" />
            )
          }} />
        <Tab.Screen name="Logout" component={() => null} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name="exit-to-app"
              onPress={handleLogoutClick} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default AppTabNavigator;
