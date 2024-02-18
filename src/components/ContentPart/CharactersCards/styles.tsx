import baseTheme from '@styles/theme';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 14.375rem);
  grid-column-gap: 1.625rem;
  grid-row-gap: 2.5rem;
  justify-content: center;
  align-content: center;

  @media (max-width: ${baseTheme.media.laptopLarge}) {
    grid-row-gap: 2.188rem;
  }

  @media (max-width: ${baseTheme.media.laptopMedium}) {
    grid-template-columns: repeat(auto-fit, 12.5rem);
    grid-column-gap: 0.938rem;
  }

  @media (max-width: ${baseTheme.media.laptopSmall}) {
    grid-template-columns: repeat(auto-fit, 10.625rem);
  }

  @media (max-width: ${baseTheme.media.tabletLarge}) {
    grid-template-columns: repeat(auto-fit, 14.375rem);
  }

  @media (max-width: ${baseTheme.media.tabletMedium}) {
    grid-template-columns: repeat(auto-fit, 12.5rem);
  }

  @media (max-width: ${baseTheme.media.tabletSmall}) {
    grid-template-columns: repeat(auto-fit, 11.25rem);
  }

  @media (max-width: ${baseTheme.media.mobileLarge}) {
    grid-template-columns: repeat(auto-fit, 10rem);
  }

  @media (max-width: ${baseTheme.media.mobileMedium}) {
    grid-template-columns: repeat(auto-fit, 9.063rem);
  }

  @media (max-width: ${baseTheme.media.mobileSmall}) {
    grid-template-columns: repeat(auto-fit, 7.5rem);
  }
`;
