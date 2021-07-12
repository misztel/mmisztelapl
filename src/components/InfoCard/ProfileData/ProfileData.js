import React from 'react';
import styled from 'styled-components';

import { StaticImage } from 'gatsby-plugin-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

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
`;

const StyledPosition = styled.div`
  font-size: 1rem;
  padding: 5px 0px;
`;

const StyledSocials = styled.div`
  font-size: 1.4rem;
  padding: 5px 0px;
`;

const StyledDownloadButton = styled.a`
  color: #33ADE9;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #3D3D3D;
  }
`;

const ProfileData = () => {
  return (
    <Wrapper>
      <StyledProfileData>
        <StyledProfilePhoto>
          <StaticImage
            alt="Maciej Misztela profile photo"
            src="../../images/profilephoto.png"
          />
        </StyledProfilePhoto>
        <StyledName>Maciej Misztela</StyledName>
        <StyledPosition>Frontend / Wordpress Developer</StyledPosition>
        <StyledSocials>
          <FontAwesomeIcon icon={faGithub} /><FontAwesomeIcon icon={faLinkedin} />
        </StyledSocials>
      </StyledProfileData>
      <StyledProfileMore>
        <StyledDownloadButton href="#">
          <FontAwesomeIcon icon={faDownload} /> Download CV
        </StyledDownloadButton>
      </StyledProfileMore>
    </Wrapper>
  );
};

export default ProfileData;
