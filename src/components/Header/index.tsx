import React from 'react';
import StyledHeader from './styles';
import LOGO_PATH from '@assets/images/Rick_and_Morty.svg';
import RICK_AND_MORTY_LOGO_ALT from '@constants/logoAltText';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img src={LOGO_PATH} alt={RICK_AND_MORTY_LOGO_ALT} />
    </StyledHeader>
  );
};

export default Header;
