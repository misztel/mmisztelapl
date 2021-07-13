import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const StyledDownloadButton = styled.a`
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text};;
  }
`;

const DownloadButton = ({ children, url }) => {
  return (
    <StyledDownloadButton href={url} target="_blank">
      <FontAwesomeIcon icon={faDownload} /> {children}
    </StyledDownloadButton>
  );
};

export default DownloadButton;
