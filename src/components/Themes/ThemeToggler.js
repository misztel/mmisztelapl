import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

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
  background-color: #828282;
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
    z-index: 3;
  }
`;

const SunIcon = styled.div`
  position: absolute;
  color: #ffc300;
  right: 6px;
  top: 3px;
  z-index: 2;
  font-size: 14px;
`;

const MoonIcon = styled.div`
  position: absolute;
  color: #fffed5;
  left: 6px;
  top: 3px;
  z-index: 2;
  font-size: 14px;
`;

const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <ToggleSwitch onClick={toggleTheme} theme={theme}>
      <input type="checkbox" />
      <MoonIcon>
        <FontAwesomeIcon icon={faMoon} />
      </MoonIcon>
      <SunIcon>
        <FontAwesomeIcon icon={faSun} />
      </SunIcon>
      <ToggleSlider theme={theme} />
    </ToggleSwitch>
  );
};
ThemeToggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default ThemeToggler;
