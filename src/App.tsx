import React from 'react';
import { useSelector } from 'react-redux'
import LoginScreen from './screens/LoginScreen/LoginScreen';
import AppTabNavigator from './navigations/AppTabNavigator';
import { RootState } from './redux/rootReducer';

const App = () => {
  const isAuth = useSelector<RootState>(state => state.auth.isAuth);
  return !isAuth ? <LoginScreen /> : <AppTabNavigator />
};

export default App;
