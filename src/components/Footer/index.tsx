import React from 'react';
import LOGO from '@assets/images/Rick_and_Morty.svg';
import { StyledFooter, StyledLogoImage } from './styles';
import RICK_AND_MORTY_LOGO_ALT from '@constants/logoAltText';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledLogoImage src={LOGO} alt={RICK_AND_MORTY_LOGO_ALT} />
    </StyledFooter>
  );
};

export default Footer;
