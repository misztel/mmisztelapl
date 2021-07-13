import React from 'react';
import styled from 'styled-components';

import DownloadButton from '../../BasicElements/Button/DownloadButton';

const StyledNavInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavInfo = () => {
  return (
    <StyledNavInfo>
      <DownloadButton url="#">
        Download CV
      </DownloadButton>
    </StyledNavInfo>
  );
};

export default NavInfo;
