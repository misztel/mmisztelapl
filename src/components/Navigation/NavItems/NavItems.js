import React from 'react';

import NavLink from './NavLink/NavLink'
import styled from 'styled-components';

const StyledNavItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavItems = () => {
  return (
    <StyledNavItems>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/resume"> Resume</NavLink>
      <NavLink to="/portfolio"> Portfolio</NavLink>
      <NavLink to="/contact"> Contact</NavLink>
    </StyledNavItems>
  );
};

export default NavItems;
