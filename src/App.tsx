import React from 'react';
import { useSelector } from 'react-redux';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { RootState } from './redux/rootReducer';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigators/RootStack';

const App = () => {
  const isAuth = useSelector<RootState>((state) => state.auth.isAuth);

  return !isAuth ? (
    <LoginScreen />
  ) : (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
