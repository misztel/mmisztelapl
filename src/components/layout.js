/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../hooks/useDarkTheme';
import { GlobalStyles } from "../GlobalStyles/GlobalStyles";
import { lightTheme, darkTheme } from "./Themes/Themes";

import { useStaticQuery, graphql } from "gatsby"

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
  background-color: hsl(0,0%,60%);
  width: 160px;
  height: 35px;
  padding:5px 8px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Wrapper>
        <ToggleThemex>
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        </ToggleThemex>
        <Container>
          <InfoCard />
          <ContentCard data={children} />
        </Container>
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
