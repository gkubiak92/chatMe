import React from 'react';
import { useSelector } from 'react-redux';
import { AuthUser } from 'redux/auth/authSlice';
import { RootState } from 'redux/rootReducer';
import S from './StyledComponents';

const ProfileScreen = () => {
  const { givenName, familyName, photo, email } = useSelector<
    RootState,
    AuthUser
  >((state) => state.auth.user);

  return (
    <S.ProfileContainer>
      <S.ProfileAvatar source={{ uri: photo as string }} />
      <S.Name>
        {givenName} {familyName}
      </S.Name>
      <S.Email>{email}</S.Email>
    </S.ProfileContainer>
  );
};

export default ProfileScreen;
