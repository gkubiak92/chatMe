import React from 'react';
import {StatusBar} from 'react-native';
import AppLogo from './components/AppLogo/AppLogo';
import AppButton from './components/AppButton/AppButton';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
`;

const StyledImage = styled.Image`
  height: 260px;
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StyledView>
        <AppLogo />
        <StyledImage
          source={require('src/assets/homeImage.png')}
          resizeMode="contain"
        />
        <AppButton title="SignIn with Google" onPress={() => {}} />
      </StyledView>
    </>
  );
};

export default App;
