import * as React from "react"
import styled from 'styled-components'
import Seo from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faFutbol, faHamburger, faHeadphones, faMicrochip, faServer } from '@fortawesome/free-solid-svg-icons'

import Paragraph from '../components/BasicElements/Paragraph/Paragraph';

const StyledSection = styled.div`
  margin-bottom: 50px;
`;

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
    background: radial-gradient(ellipse at left,#03a9f4 0%,rgba(255,255,255,0) 90%);
  }
`;

const StyledTagBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 0;
  justify-content: space-between;
  margin: 0px -20px;
`;

const StyledTag = styled.div`
position: relative;
  display: flex;
  flex: 45%;
  margin: 10px 20px;
  justify-content: space-between;
  align-items: center;
  &:after{
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 1px;
    right: 0px;
    background: radial-gradient(ellipse at left,#03a9f4 0%,rgba(255,255,255,0) 90%);
  }
`;

const StyledTagTitle = styled.div`
  padding: 5px 8px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-weight: 600;
  z-index:1;
`;

const StyledTagData = styled.div`
  color: ${({ theme }) => theme.text};
`;

const StyledLanguageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 0;
  justify-content: space-evenly;
  margin: 0px -20px;
`;

const StyledLanguageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLanguageCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0px 20px;
  border: 7px solid ${({ theme }) => theme.primary};
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 1.425rem;
`;

const StyledLanguageName = styled.div`
  font-size: 1.375rem;
  font-weight: 600;
  padding: 15px 0;
`;

const StyledIntrestsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledIntrestsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledIntrestsIcon = styled.div`
  font-size: 2.25rem;
  color: ${({ theme }) => theme.primary};

`;

const StyledIntrestsText = styled.div`
  font-size: 1.375rem;
  font-weight: 600;
`;

const IndexPage = () => (
  <>
    <Seo title="About Me" />
    <StyledSection>
      <StyledTitle>About Me</StyledTitle>
      <Paragraph>Hello! I’m Jason Allen. Designer & Photographer from USA, California.
        I have rich experience in web site design and photography.
        I love to talk with you about our unique.
        I have rich experience in wordpress, also I am good at Magento.
      </Paragraph>
      <StyledTagBox>
        <StyledTag>
          <StyledTagTitle>
            Age:
          </StyledTagTitle>
          <StyledTagData>
            26
          </StyledTagData>
        </StyledTag>
        <StyledTag>
          <StyledTagTitle>
            City:
          </StyledTagTitle>
          <StyledTagData>
            Bydgoszcz
          </StyledTagData>
        </StyledTag>
        <StyledTag>
          <StyledTagTitle>
            Residence:
          </StyledTagTitle>
          <StyledTagData>
            Poland
          </StyledTagData>
        </StyledTag>
        <StyledTag>
          <StyledTagTitle>
            Email:
          </StyledTagTitle>
          <StyledTagData>
            misztel018@gmail.com
          </StyledTagData>
        </StyledTag>
      </StyledTagBox>
    </StyledSection>
    <StyledSection>
      <StyledTitle>Languages</StyledTitle>
      <StyledLanguageContainer>
        <StyledLanguageBox>
          <StyledLanguageCircle>
            B2
          </StyledLanguageCircle>
          <StyledLanguageName>
            English
          </StyledLanguageName>
        </StyledLanguageBox>
        <StyledLanguageBox>
          <StyledLanguageCircle>
            Native
          </StyledLanguageCircle>
          <StyledLanguageName>
            Polish
          </StyledLanguageName>
        </StyledLanguageBox>
      </StyledLanguageContainer>
    </StyledSection>
    <StyledSection>
      <StyledTitle>Intrests</StyledTitle>
      <StyledIntrestsContainer>
        <StyledIntrestsBox>
          <StyledIntrestsIcon>
            <FontAwesomeIcon icon={faFutbol} />
          </StyledIntrestsIcon>
          <StyledIntrestsText>
            Sports
          </StyledIntrestsText>
        </StyledIntrestsBox>
        <StyledIntrestsBox>
          <StyledIntrestsIcon>
            <FontAwesomeIcon icon={faServer} />
          </StyledIntrestsIcon>
          <StyledIntrestsText>
            Technologies
          </StyledIntrestsText>
        </StyledIntrestsBox>
        <StyledIntrestsBox>
          <StyledIntrestsIcon>
            <FontAwesomeIcon icon={faHamburger} />
          </StyledIntrestsIcon>
          <StyledIntrestsText>
            Cooking
          </StyledIntrestsText>
        </StyledIntrestsBox>
        <StyledIntrestsBox>
          <StyledIntrestsIcon>
            <FontAwesomeIcon icon={faHeadphones} />
          </StyledIntrestsIcon>
          <StyledIntrestsText>
            Music
          </StyledIntrestsText>
        </StyledIntrestsBox>
      </StyledIntrestsContainer>
    </StyledSection>
  </>
)

export default IndexPage
