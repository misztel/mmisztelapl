import React from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const StyledMenuToggler = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;
  font-weight: 600;
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 15%);
  z-index: 10;
  border: none;
  transition: all 0.3s linear;

  &:hover{
    color: ${({ theme }) => theme.primary};
  }
`;

const HamburgerWrapper = styled.div`
  display: inline-block;
  overflow: visible;
  margin: 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: .15s;
  transition-property: opacity,filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
`;

const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`;

const HamburgerInner = styled.div`
  position: absolute;
  width: 40px;
  height: 4px;
  transition-timing-function: ease;
  transition-duration: .15s;
  transition-property: transform;
  border-radius: 4px;
  background-color: #000;
&:before{
    content:'';
    position: absolute;
    width: 40px;
    height: 4px;
    transition-timing-function: ease;
    transition-duration: .15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: #000;
    top: -10px;
    left: 0px;
}

&:after{
    content:'';
    position: absolute;
    width: 40px;
    height: 4px;
    transition-timing-function: ease;
    transition-duration: .15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: #000;
    top: -20px;
    left: 0px;
}
`;

const MenuToggler = ({ clicked }) => {
  return (
    <StyledMenuToggler onClick={() => clicked()}>
      <HamburgerWrapper>
        <HamburgerBox>
          <HamburgerInner />
        </HamburgerBox>
      </HamburgerWrapper>
    </StyledMenuToggler>
  );
};

export default MenuToggler;
