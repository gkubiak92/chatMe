export type HomeStackParamList = {
  ChatList: undefined;
  Profile: undefined;
  Logout: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  ChatRoom:
    | {
        chatRoomId?: string;
        chatRoomName?: string;
      }
    | undefined;
};
