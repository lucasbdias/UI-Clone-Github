import React from 'react';

import {
  Container,
  Main,
  LeftSide,
  RightSide, 
} from './styles';

import ProfileData from "../../components/ProfileData";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'lucasbdias'}
            name={'Lucas Braz'}
            avatarUrl={'https://avatars3.githubusercontent.com/u/49083499?v=4'}
            followers={69}
            following={24}
            company={'iClouds'}
            location={'Jacareí, Brazil'}
            email={'lucasbrzdias@gmail.com'}
            blog={'https://www.linkedin.com/in/lucas-braz-dias/'}
          />
        </LeftSide>

        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;