import * as React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
  color: #33ADE9;
  text-decoration: none;
  font-weight: 600;
  padding: 20px 20px;
`;

const NavLink = (props) => (
  <StyledLink to={props.to}>
    {props.children}
  </StyledLink>
)

export default NavLink
