import styled from 'styled-components/native';

const ListItemContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  border-bottom-color: gray;
  border-bottom-width: 1px;
`;

const ListItemContentColumn = styled.View`
  flex: 8;
  justify-content: space-between;
`;

const ListItemTimeColumn = styled.View`
  flex: 2;
  align-items: flex-end;
  justify-content: flex-start;
`;

const ChatHeader = styled.Text`
  font-size: 22px;
`;

const Subheader = styled.Text`
  font-size: 12px;
  margin-bottom: 8px;
`;

export default {
  ListItemContainer,
  ListItemContentColumn,
  ListItemTimeColumn,
  ChatHeader,
  Subheader,
};
