import styled from 'styled-components/native';

const ButtonContainer = styled.View`
  align-items: center;
`;

const Touchable = styled.TouchableHighlight`
  border: 4px solid black;
  padding: 8px;
  background-color: #ffcf00;
`;

const ButtonText = styled.Text`
  font-size: 18px;
`;

export default { ButtonContainer, Touchable, ButtonText };
