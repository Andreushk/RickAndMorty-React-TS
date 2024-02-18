import React, { PropsWithChildren } from 'react';
import StyledParagraph from './styles';

const Paragraph: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
