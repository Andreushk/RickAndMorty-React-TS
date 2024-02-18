import React, { PropsWithChildren } from 'react';
import StyledTitle from './styles';

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
