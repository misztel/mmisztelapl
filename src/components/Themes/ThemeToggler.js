import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

const ToggleSwitch = styled.div`
  display: inline-block;
  position: relative;
  width: 44px;
  height: 25px;

  & > input{
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(0deg 0% 30%);
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 40px;

  &:before{
    position: absolute;
    content: "";
    transform: ${props => props.theme === 'light' ? 'translateX(0px);' : 'translateX(18px);'};
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;
const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <ToggleSwitch onClick={toggleTheme} theme={theme}>
      <input type="checkbox" />
      <ToggleSlider theme={theme} />
    </ToggleSwitch>
  );
};
ThemeToggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default ThemeToggler;
