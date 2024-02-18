import { ICharacterInfo } from '@responsesTypes/charactersResponse';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';
import { StyledContainer } from './styles';
import Overlay from '@common/Overlay';
import Card from './Card';
import Modal from './Modal';

interface IComponentProps {
  charactersData: ICharacterInfo[];
  paginationCB: () => void;
}

const CharactersCards: React.FC<IComponentProps> = ({ charactersData, paginationCB }) => {
  const [characterIdForModal, setCharacterIdForModal] = useState<number | null>(null);
  const { ref: paginationRef, inView } = useInView({ threshold: 1 });

  useEffect((): void => {
    if (inView) paginationCB();
  }, [inView]);

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const targetElement: HTMLElement = event.target as HTMLElement;
    const closestCharacterElement: Element | null = targetElement.closest('[data-character-id]');

    if (!closestCharacterElement) return;

    const characterId: string | null = closestCharacterElement.getAttribute('data-character-id');

    if (!characterId) return;

    setCharacterIdForModal(Number(characterId));
  };

  const handleOverlayClick = (): void => {
    setCharacterIdForModal(null);
  };

  return (
    <>
      <StyledContainer onClick={handleCardClick}>
        {charactersData.map((character, index) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            imageURL={character.image}
            paginationRef={index === charactersData.length - 1 ? paginationRef : null}
          />
        ))}
      </StyledContainer>
      {characterIdForModal && (
        <Overlay clickCB={handleOverlayClick}>
          <Modal characterId={characterIdForModal} />
        </Overlay>
      )}
    </>
  );
};

export default CharactersCards;
