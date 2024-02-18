import baseTheme from '@styles/theme';
import styled from 'styled-components';

export const StyledContainer = styled.main`
  width: 62.5rem;
  min-height: calc(100vh - 30.5rem);
  margin: 5rem auto;

  @media (max-width: ${baseTheme.media.laptopMedium}) {
    width: 53.125rem;
  }

  @media (max-width: ${baseTheme.media.laptopSmall}) {
    width: 46.875rem;
  }

  @media (max-width: ${baseTheme.media.tabletLarge}) {
    width: 30rem;
  }

  @media (max-width: ${baseTheme.media.tabletMedium}) {
    width: 28.125rem;
  }

  @media (max-width: ${baseTheme.media.tabletSmall}) {
    width: 26.25rem;
  }

  @media (max-width: ${baseTheme.media.mobileLarge}) {
    width: 23.75rem;
  }

  @media (max-width: ${baseTheme.media.mobileMedium}) {
    width: 20rem;
  }

  @media (max-width: ${baseTheme.media.mobileSmall}) {
    width: 18.125rem;
  }
`;
