/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../hooks/useDarkTheme';
import { GlobalStyles } from "../GlobalStyles/GlobalStyles";
import { lightTheme, darkTheme } from "./Themes/Themes";

import ThemeToggler from './Themes/ThemeToggler'
import InfoCard from './InfoCard/InfoCard'
import ContentCard from './ContentCard/ContentCard';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  width: 90%;
  height: 84vh;
  align-items: center;
`

const ToggleThemex = styled.div`
  position: absolute;
  right: 5%;
  top: 0px;
  background-color: ${({ theme }) => theme.body};
  padding:8px 20px;
`;


const BorderTop = styled.div`
  position: absolute;
  bottom: -15px;
  left: 0px;
  right: 15px;
  height: 15px;
  background: ${({ theme }) => theme.primary};
`

const BorderBottom = styled.div`
  position: absolute;
  bottom: -15px;
  top: 15px;
  left: -15px;
  width: 15px;
  background: ${({ theme }) => theme.primary};
`
const BorderTopLeft = styled.div`
  position: absolute;
  top: 0px;
  left: -15px;
  width: 0px;
  height: 0px;
  border-right: solid 15px ${({ theme }) => theme.primary};
  border-top: solid 15px transparent;
  border-bottom: solid 15px transparent;
`

const BorderBottomRight = styled.div`
  position: absolute;
  bottom: -30px;
  right: 0px;
  width: 0px;
  height: 0px;
  border-right: solid 15px transparent;
  border-top: solid 15px ${({ theme }) => theme.primary};
  border-bottom: solid 15px transparent;
`

const Layout = ({ children }) => {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Wrapper>
        <ToggleThemex>
          <BorderTopLeft />
          <BorderBottomRight />
          <BorderTop />
          <BorderBottom />
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        </ToggleThemex>
        <Container>
          <InfoCard />
          <ContentCard>
            {children}
          </ContentCard>
        </Container>
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
