import baseTheme from '@styles/theme';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${baseTheme.colors.itemsBG};
  height: 14.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  @media (${baseTheme.media.tabletMedium}) {
    border-radius: 0;
  }
`;

export const StyledLogoImage = styled.img`
  width: 14.5rem;
  height: auto;

  @media (${baseTheme.media.tabletSmall}) {
    width: 80%;
  }
`;
