import React from 'react';
import Loader from '@common/Loader';
import StyledContainer from './styles';

const PaginationLoader: React.FC = () => {
  return (
    <StyledContainer>
      <Loader />
    </StyledContainer>
  );
};

export default PaginationLoader;
