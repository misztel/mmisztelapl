import * as React from "react"
import styled from 'styled-components'
import Seo from "../components/seo"

import Paragraph from '../components/BasicElements/Paragraph/Paragraph';

const StyledTitle = styled.h1`
  position: relative;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.primary};
  padding: 0 0 20px 0;
  margin: 0 0 20px 0;
  font-weight: 600;

  &:after{
    content: '';
    position: absolute;
    bottom: 0px;
    left: -20px;
    height: 1px;
    right: 0px;
    background: radial-gradient(ellipse at left,#ddd 0%,rgba(255,255,255,0) 70%);
  }
`;

const IndexPage = () => (
  <>
    <Seo title="About Me" />
    <StyledTitle>About Me</StyledTitle>
    <Paragraph>Hello! I’m Jason Allen. Designer & Photographer from USA, California.
      I have rich experience in web site design and photography.
      I love to talk with you about our unique.
      I have rich experience in wordpress, also I am good at Magento.
    </Paragraph>
    <StyledTitle>Languages</StyledTitle>
    <StyledTitle>Skills</StyledTitle>
    <StyledTitle>Intrests</StyledTitle>
  </>
)

export default IndexPage
