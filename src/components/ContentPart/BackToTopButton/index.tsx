import React, { useEffect, useState } from 'react';
import { StyledButton, StyledContainer } from './styles';

const BUTTON_TEXT = 'Back To Top';

interface IComponentProps {
  clickCB: () => void;
}

const BackToTopButton: React.FC<IComponentProps> = ({ clickCB }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect((): void => {
    setIsVisible(true);
  }, []);

  return (
    <StyledContainer isVisible={isVisible} onClick={clickCB}>
      <StyledButton>{BUTTON_TEXT}</StyledButton>
    </StyledContainer>
  );
};

export default React.memo(BackToTopButton);
