import styled from 'styled-components/native';

const ChatRoomContainer = styled.View`
  flex: 1;
`;

const InputContainer = styled.View`
  flex-direction: row;
  margin-top: auto;
  padding: 8px;
`;

const TextInput = styled.TextInput`
  flex: 10;
  margin-right: 8px;
  height: 40px;
  font-size: 18px;
  border-color: #e6e6e6;
  border-width: 2px;
`;

const SendButton = styled.TouchableHighlight`
  flex: 2;
  justify-content: center;
  align-items: center;
  background-color: #ffcf00;
  color: #40424c;
`;

export default { ChatRoomContainer, InputContainer, TextInput, SendButton };
