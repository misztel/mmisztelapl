import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import DownloadButton from '../../BasicElements/Button/DownloadButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledProfileData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  padding: 25px;
  font-weight: 600;
  color: #3396DF;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 15%);
  transition: all 0.30s linear;
`;

const StyledProfileMore = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProfilePhoto = styled.div`
  display: block;
  padding: 5px 0px;
`;

const StyledName = styled.div`
  font-size: 2rem;
  padding: 5px 0px;
  color: ${({ theme }) => theme.primary};
`;

const StyledPosition = styled.div`
  font-size: 1rem;
  padding: 5px 0px;
  color: ${({ theme }) => theme.primary};
`;

const StyledSocials = styled.div`

`;

const SocialIcon = styled.a`
  font-size: 1.4rem;
  padding: 5px;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease-in-out;
  &:hover{
    color: ${({ theme }) => theme.primary};
  }
`;

const ProfileData = () => {
  return (
    <Wrapper>
      <StyledProfileData>
        <StyledProfilePhoto>
          <StaticImage
            alt="Maciej Misztela profile photo"
            src="../../../images/profilephoto.png"
          />
        </StyledProfilePhoto>
        <StyledName>Maciej Misztela</StyledName>
        <StyledPosition>Frontend / Wordpress Developer</StyledPosition>
        <StyledSocials>
          <SocialIcon href="#" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </SocialIcon>
          <SocialIcon href="#" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
        </StyledSocials>
      </StyledProfileData>
      <StyledProfileMore>
        <DownloadButton url="#">
          Download CV
        </DownloadButton>
      </StyledProfileMore>
    </Wrapper>
  );
};

export default ProfileData;
