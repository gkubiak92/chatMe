import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'screens/ChatList/node_modules/types';

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type Props = {
  navigation: HomeScreenNavigationProp;
};
