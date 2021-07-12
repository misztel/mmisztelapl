/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ProfileData from './ProfileData/ProfileData'
import Navigation from "../Navigation/Navigation"
import MenuToggler from './MenuToggler/MenuToggler'

const Card = styled.div`
  position: relative;
  padding: 20px;
  width: 32%;
  height: 100%;
  background-color: ${({ theme }) => theme.body};
  box-shadow: 1px 0px 16px 0px rgb(0 0 0 / 12%);
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.30s linear;
`

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

function InfoCard() {

  const [toggled, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggled);
  }

  return (
    <Card>
      <BorderTopLeft />
      <BorderBottomRight />
      <BorderTop />
      <BorderBottom />

      <ProfileData />

      <MenuToggler toggled={toggled} clicked={() => toggleHandler()} />
      <Navigation toggled={toggled} />
    </Card>
  )
}

export default InfoCard
