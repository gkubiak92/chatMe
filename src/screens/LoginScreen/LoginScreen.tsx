import React, { useEffect } from 'react';
import S from './StyledComponents';
import AppLogo from '../../components/AppLogo/AppLogo';
import { useDispatch } from 'react-redux';
import { authSuccess } from '../../redux/auth/authSlice';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import { signInWithGoogle } from '../../services/firebase/utils';

const LoginScreen = () => {
  useEffect(() => {}, []);
  const dispatch = useDispatch();

  const handleLoginClick = async () => {
    try {
      const userInfo = await signInWithGoogle();
      console.log('logged with:', userInfo);
      dispatch(authSuccess(userInfo));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.LoginContainer>
      <AppLogo />
      <S.LoginImage
        source={require('src/assets/homeImage.png')}
        resizeMode="contain"
      />
      <GoogleSigninButton onPress={handleLoginClick} />
    </S.LoginContainer>
  );
};

export default LoginScreen;
