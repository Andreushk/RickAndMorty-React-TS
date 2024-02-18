import React from 'react';
import CHARACTER_IMAGE_ALT_TEXT from '@constants/characterImageAltText';
import { StyledContainer, StyledImage, StyledImageContainer, StyledNameContainer } from './styles';
import Title from '@common/Title';

interface IComponentProps {
  id: number;
  name: string;
  imageURL: string;
  paginationRef?: React.Ref<HTMLDivElement>;
}

const Card: React.FC<IComponentProps> = ({ id, name, imageURL, paginationRef }) => {
  return (
    <StyledContainer data-character-id={id} ref={paginationRef}>
      <StyledImageContainer>
        <StyledImage src={imageURL} alt={`${CHARACTER_IMAGE_ALT_TEXT} ${name}`} />
      </StyledImageContainer>
      <StyledNameContainer>
        <Title>{name}</Title>
      </StyledNameContainer>
    </StyledContainer>
  );
};

export default React.memo(Card);
