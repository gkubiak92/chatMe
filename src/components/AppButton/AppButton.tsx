import React from 'react';
import { AppButtonProps } from './types';
import S from './StyledComponents';

const AppButton: React.FC<AppButtonProps> = ({ title, onPress }) => (
  <S.ButtonContainer>
    <S.Touchable onPress={onPress}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.Touchable>
  </S.ButtonContainer>
);

export default AppButton;
