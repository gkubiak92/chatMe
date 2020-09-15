import React from 'react';
import S from './StyledComponents';
import AppButton from '../../components/AppButton/AppButton';
import AppLogo from '../../components/AppLogo/AppLogo';
import { useDispatch } from 'react-redux';
import { authSuccess } from '../../redux/auth/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(authSuccess());
  };

  return (
    <S.LoginContainer>
      <AppLogo />
      <S.LoginImage
        source={require('src/assets/homeImage.png')}
        resizeMode="contain"
      />
      <AppButton title="SignIn with Google" onPress={handleLoginClick} />
    </S.LoginContainer>
  );
};

export default LoginScreen;
