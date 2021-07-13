/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

const StyledContentCard = styled.div`
  position: relative;
  padding: 20px;
  width: 68%;
  height: 90%;
  background-color: white;
  background-color: ${({ theme }) => theme.body};
  transition: all 0.30s linear;
`

const BorderBottom = styled.div`
  position: absolute;
  bottom: -15px;
  left: 0px;
  right: 15px;
  height: 15px;
  background: ${({ theme }) => theme.primary};
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

function ContentCard({ children }) {

  return (
    <StyledContentCard>
      <BorderBottomRight />
      <BorderBottom />
      <main>
        {children}
      </main>
    </StyledContentCard>
  )
}

export default ContentCard
