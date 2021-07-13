import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.text};
`;

const Paragraph = ({ children }) => {
  return (
    <StyledParagraph>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
