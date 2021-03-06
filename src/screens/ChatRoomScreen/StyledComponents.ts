import { ChatMessage } from 'api/types';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const ScrollContainer = styled.View`
  flex: 1;
`;

// Workaround for styled flatlist typings
// https://dev.to/acro5piano/use-styled-components-reactnative-s-flatlist-in-typescript-308e
const ChatRoomFlatList = styled(FlatList as new () => FlatList<ChatMessage>)`
  flex: 1;
  padding: 12px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  margin-top: auto;
  padding: 8px;
  background-color: #eee;
`;

const TextInput = styled.TextInput`
  flex: 10;
  margin-right: 8px;
  height: 40px;
  font-size: 18px;
  border-color: #e6e6e6;
  border-width: 2px;
  background-color: white;
`;

const SendButton = styled.TouchableHighlight`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: #ffcf00;
  color: #40424c;
`;

export default {
  ScrollContainer,
  ChatRoomFlatList,
  InputContainer,
  TextInput,
  SendButton,
};
