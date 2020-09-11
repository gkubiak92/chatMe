import React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 48px;
`;

const AppLogo = () => (
  <StyledView>
    <StyledText>chatMe</StyledText>
  </StyledView>
);

export default AppLogo;
