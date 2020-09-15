import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/RootStack';

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type Props = {
  navigation: HomeScreenNavigationProp;
};
