import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'navigators/types';

export type ChatRoomScreenRouteProp = RouteProp<RootStackParamList, 'ChatRoom'>;

export type Props = {
  route: ChatRoomScreenRouteProp;
};
