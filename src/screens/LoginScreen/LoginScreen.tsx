import React from 'react';
import styled from 'styled-components/native';
import AppButton from '../../components/AppButton/AppButton';
import AppLogo from '../../components/AppLogo/AppLogo';

const StyledView = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
`;

const StyledImage = styled.Image`
  height: 260px;
`;

const LoginScreen = () => {
  const handleLoginClick = () => {
    console.log('Authenticated');
  };

  return (
    <StyledView>
      <AppLogo />
      <StyledImage
        source={require('src/assets/homeImage.png')}
        resizeMode="contain"
      />
      <AppButton title="SignIn with Google" onPress={handleLoginClick} />
    </StyledView>
  );
};

export default LoginScreen;
