import React from 'react';

import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/styles.css';
import { colors } from '../../styles/data_vis_colors';

const ProfileSection = styled.div``;

const Title = styled.div`
  background-color: ${colors.primary_accent_color};
  width: 100%;
  height: 20vh;
  display: grid;
  align-items: center;

  h2 {
    color: white;
    font-family: 'MonetaBold';
    text-align: center;
    font-size: 3rem;
  }
`;

const UserContent = styled.div`
  padding: 5%;
  display: flex;
  gap: 2rem;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const PhotoContainer = styled.div`
  width: 11rem;
  display: grid;
  align-items: center;
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 100%;
`;

const UserInfo = styled.div`
  padding: 0 2em 0 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-weight: bold;
    font-size: 2em;
    font-family: 'BeatriceRegular';
  }
  h4 {
    margin: 0;
    font-size: 1rem;
    font-family: 'AcuminProMedium';
  }
  p {
    margin: 0;
    margin-bottom: 1rem;
    font-family: 'AcuminProRegular';
  }
`;

const Profile = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  const { name, picture, email, nickname } = user;

  return (
    <ProfileSection>
      <Title>
        <h2>User Profile</h2>
      </Title>
      <UserContent>
        <PhotoContainer>
          <ProfilePic src={picture} alt="Profile" />
        </PhotoContainer>
        <UserInfo>
          <h3>{name}</h3>
          <h4>Username</h4>
          <p>{nickname ? nickname : <i>none</i>}</p>
          <h4>Email</h4>
          <p>{email ? email : <i>none</i>}</p>
        </UserInfo>
      </UserContent>
    </ProfileSection>
  );
};

export default Profile;
