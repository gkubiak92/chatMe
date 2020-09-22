import { User } from '@react-native-community/google-signin';

export type AuthUser = User['user'];

export interface AuthState {
  isAuth: boolean;
  user: AuthUser;
}
