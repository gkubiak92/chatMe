import React from 'react';
import { Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

interface Props {
  iconName: string;
  onPress: () => void;
}

const CircleButton = styled.View`
  position: absolute;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  right: 30px;
  bottom: 30px;
  background-color: #40424c;
  border-radius: 30px;
`;

const FloatingActionButton = ({ iconName, onPress }: Props) => (
  <CircleButton>
    <Pressable onPress={() => onPress()} hitSlop={20}>
      <MaterialCommunityIcons name={iconName} size={30} color="#E6E6E6" />
    </Pressable>
  </CircleButton>
);

export default FloatingActionButton;
