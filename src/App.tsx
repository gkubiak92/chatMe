import React from 'react';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import AppTabNavigator from './navigations/AppTabNavigator';

const App = () => {
  const isAuth = false;
  return !isAuth ? <LoginScreen /> : <AppTabNavigator />;
};

export default App;
