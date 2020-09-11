import {GestureResponderEvent} from 'react-native';

export interface AppButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}
