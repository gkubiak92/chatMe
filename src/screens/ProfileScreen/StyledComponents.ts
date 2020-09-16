import styled from 'styled-components/native';

const ProfileContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 32px;
`;

const ProfileAvatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const Name = styled.Text`
  font-size: 36px;
  font-weight: 600;
`;
const Email = styled.Text`
  font-size: 16px;
`;

export default { ProfileContainer, ProfileAvatar, Name, Email };
