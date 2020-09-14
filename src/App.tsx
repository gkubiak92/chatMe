import React from 'react';
import { useSelector } from 'react-redux';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { RootState } from './redux/rootReducer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './screens/HomeStack/HomeStackScreen';

const App = () => {
  const isAuth = useSelector<RootState>((state) => state.auth.isAuth);

  return !isAuth ? (
    <LoginScreen />
  ) : (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default App;
