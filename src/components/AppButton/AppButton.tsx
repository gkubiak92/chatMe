import React from 'react';
import {ButtonProps, GestureResponderEvent} from 'react-native';
import styled from 'styled-components/native';

interface AppButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const StyledView = styled.View`
  align-items: center;
`;

const StyledButton = styled.TouchableHighlight`
  border: 4px solid black;
  padding: 8px;
  background-color: #ffcf00;
`;

const StyledText = styled.Text`
  font-size: 18px;
`;

const AppButton: React.FC<AppButtonProps> = ({title, onPress}) => (
  <StyledView>
    <StyledButton onPress={onPress}>
      <StyledText>{title}</StyledText>
    </StyledButton>
  </StyledView>
);

export default AppButton;
