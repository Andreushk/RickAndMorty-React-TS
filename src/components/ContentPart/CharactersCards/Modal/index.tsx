import { ICharacterDataForModal, informationOptions } from './informationOptions';
import CHARACTER_IMAGE_ALT_TEXT from '@constants/characterImageAltText';
import { ICharacterInfo } from '@responsesTypes/charactersResponse';
import React, { useEffect, useState } from 'react';
import { CenteredMessage, Loader, Paragraph, Title } from '@common/index';
import api from '@constants/apiURL';
import {
  StyledContainer,
  StyledImage,
  StyledImageContainer,
  StyledInformationContainer,
  StyledInformationItem,
  StyledPlaceholderContainer,
} from './styles';

const ERROR_MESSAGE = 'Error in receiving character data.';

interface IComponentProps {
  characterId: number;
}

const Modal: React.FC<IComponentProps> = ({ characterId }) => {
  const [characterData, setCharacterData] = useState<ICharacterDataForModal | null>(null);
  const [isErrorInGettingCharacterData, setError] = useState<boolean>(false);

  useEffect((): void => {
    const getCharacterData = async (): Promise<void> => {
      try {
        const response: ICharacterInfo = await api.get(`character/${characterId}`).json();
        const { name, gender, image, location, status, species, origin } = response;

        const characterData: ICharacterDataForModal = {
          name,
          gender,
          image,
          status,
          species,
          location: location.name,
          origin: origin.name,
        };

        setCharacterData(characterData);
      } catch (error) {
        setError(true);
      }
    };

    getCharacterData();
  }, []);

  if (isErrorInGettingCharacterData) {
    return (
      <StyledContainer>
        <StyledPlaceholderContainer>
          <CenteredMessage message={ERROR_MESSAGE} />
        </StyledPlaceholderContainer>
      </StyledContainer>
    );
  }

  if (!characterData) {
    return (
      <StyledContainer>
        <StyledPlaceholderContainer>
          <Loader />
        </StyledPlaceholderContainer>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImage
          src={characterData.image}
          alt={`${CHARACTER_IMAGE_ALT_TEXT} ${characterData.name}`}
        />
      </StyledImageContainer>
      <StyledInformationContainer>
        {informationOptions.map((option) => (
          <StyledInformationItem key={option.displayTitle}>
            <Title>{option.displayTitle}</Title>
            <Paragraph>{characterData[option.responseKey]}</Paragraph>
          </StyledInformationItem>
        ))}
      </StyledInformationContainer>
    </StyledContainer>
  );
};

export default Modal;
