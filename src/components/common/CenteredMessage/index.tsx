import React from 'react';
import Title from '../Title';
import StyledContainer from './styles';

interface IComponentProps {
  message: string;
}

const CenteredMessage: React.FC<IComponentProps> = ({ message }) => {
  return (
    <StyledContainer>
      <Title>{message}</Title>
    </StyledContainer>
  );
};

export default CenteredMessage;
