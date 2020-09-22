import React from 'react';
import { Props } from './types';
import { Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import S from './StyledComponents';

const FloatingActionButton = ({ iconName, onPress }: Props) => (
  <S.CircleButton>
    <Pressable onPress={() => onPress()} hitSlop={20}>
      <MaterialCommunityIcons name={iconName} size={30} color="#E6E6E6" />
    </Pressable>
  </S.CircleButton>
);

export default FloatingActionButton;
