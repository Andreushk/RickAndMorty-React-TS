import React from 'react';
import { StyledLoaderContainer, StyledLoaderItem, StyledLoaderWrapper } from './styles';

const Loader: React.FC = () => {
  return (
    <StyledLoaderWrapper>
      <StyledLoaderContainer>
        <StyledLoaderItem />
        <StyledLoaderItem />
        <StyledLoaderItem />
      </StyledLoaderContainer>
    </StyledLoaderWrapper>
  );
};

export default React.memo(Loader);
