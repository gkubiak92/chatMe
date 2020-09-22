import styled from 'styled-components/native';

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ModalForm = styled.View`
  justify-content: space-evenly;
  padding: 12px;
  width: 300px;
  height: 240px;
  background-color: white;
`;

const CloseButton = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default { ModalContainer, ModalForm, CloseButton };
