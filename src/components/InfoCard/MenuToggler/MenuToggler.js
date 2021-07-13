import React from 'react';
import styled from 'styled-components'

const StyledMenuToggler = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 15%);
  z-index: 10;
  border: none;
  transition: all 0.3s linear;

  .inner{
    transition: all 0.3s linear;
    &:before{
      transition: all 0.3s linear;
    }
    &:after{
      transition: all 0.3s linear;
    }
  }

  &:hover {
    .textinner{
      color: ${({ theme }) => theme.text};
    }
    .inner{
      background-color: ${({ theme }) => theme.text};
      &:before{
        background-color: ${({ theme }) => theme.text};
      }
      &:after{
        background-color: ${({ theme }) => theme.text};
      }
    }
  }
`;

const HamburgerWrapper = styled.div`
  display: flex;
  overflow: visible;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
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
  transition-timing-function: ease-in-out;
  transition-duration: .3s;
  transition-property: transform, top;
  transform: ${props => props.isToggled ? 'rotate(-45deg)' : 'rotate(0deg)'};
  border-radius: 4px;
  top: ${props => props.isToggled ? '10px' : '0px'};
  background-color: ${({ theme }) => theme.primary};
&:before{
    content:'';
    position: absolute;
    width: 40px;
    height: 4px;
    transition-timing-function: ease-in-out;
    transition-duration: .15s;
    transition-property: transform, top;
    transform: ${props => props.isToggled ? 'rotate(90deg)' : 'rotate(0deg)'};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.primary};
    top: ${props => props.isToggled ? '0px' : '10px'};
    left: 0px;
}

&:after{
    content:'';
    position: absolute;
    width: 40px;
    height: 4px;
    transition-timing-function: ease-in-out;
    transition-duration: .15s;
    transition-property: transform, top;
    transform: ${props => props.isToggled ? 'rotate(90deg)' : 'rotate(0deg)'};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.primary};
    top: ${props => props.isToggled ? '0px' : '20px'};
    left: 0px;
    opacity: ${props => props.isToggled ? '0' : '1'};
}
`;

const HamburgerText = styled.span`
  font-size: 25px;
  text-transform: uppercase;
  padding-left:  20px;
  font-family: Montserrat;
  transition: all 0.3s linear;
  color: ${({ theme }) => theme.primary};
`;

const MenuToggler = ({ clicked, toggled }) => {
  return (
    <StyledMenuToggler onClick={() => clicked()}>
      <HamburgerWrapper>
        <HamburgerBox>
          <HamburgerInner className="inner" isToggled={toggled} />
        </HamburgerBox>
        <HamburgerText className="textinner">
          Menu
        </HamburgerText>
      </HamburgerWrapper>
    </StyledMenuToggler>
  );
};

export default MenuToggler;
