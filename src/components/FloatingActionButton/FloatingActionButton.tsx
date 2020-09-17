import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

interface Props {
  iconName: string;
  onPress: (event: GestureResponderEvent) => void;
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
  <Pressable onPress={onPress}>
    <CircleButton>
      <MaterialCommunityIcons name={iconName} size={30} color="#ffcf00" />
    </CircleButton>
  </Pressable>
);

export default FloatingActionButton;
