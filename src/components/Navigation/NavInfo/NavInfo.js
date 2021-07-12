import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const StyledNavInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavInfo = () => {
  return (
    <StyledNavInfo>
      <div>
        <FontAwesomeIcon icon={faDownload} /> Download CV
      </div>
    </StyledNavInfo>
  );
};

export default NavInfo;
