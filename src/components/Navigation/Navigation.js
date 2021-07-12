import React from 'react';
import styled from 'styled-components';

import NavItems from './NavItems/NavItems';
import NavInfo from './NavInfo/NavInfo';

const StyledNav = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  padding: 75px 25px 100px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.body};
  transition: all 0.3s ease-in-out;

  opacity: ${props => props.toggled ? 1 : 0};
  visibility: ${props => props.toggled ? 'visible' : 'hidden'};
`;

const Navigation = ({ toggled }) => {
  return (
    <StyledNav toggled={toggled}>
      <NavItems />
      <NavInfo />
    </StyledNav>
  );
};

export default Navigation;
