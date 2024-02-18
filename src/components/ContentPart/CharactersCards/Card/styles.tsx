import baseTheme from '@styles/theme';
import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  background-color: ${baseTheme.colors.itemsBG};
  border-radius: 0.5rem;
  box-shadow: 0.5px 3px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const StyledImageContainer = styled.div`
  width: 86.96%;
  height: 12.5rem;
  background-color: ${baseTheme.colors.itemsLoader};
  border-radius: 0.5rem;
  margin: 0 auto;
  margin-top: -1rem;

  @media (max-width: ${baseTheme.media.laptopMedium}) {
    height: 10.869rem;
  }

  @media (max-width: ${baseTheme.media.laptopSmall}) {
    height: 9.238rem;
  }

  @media (max-width: ${baseTheme.media.tabletLarge}) {
    height: 12.5rem;
  }

  @media (max-width: ${baseTheme.media.tabletMedium}) {
    height: 10.869rem;
  }

  @media (max-width: ${baseTheme.media.tabletSmall}) {
    height: 9.781rem;
  }

  @media (max-width: ${baseTheme.media.mobileLarge}) {
    height: 8.694rem;
  }

  @media (max-width: ${baseTheme.media.mobileMedium}) {
    height: 7.88rem;
  }

  @media (max-width: ${baseTheme.media.mobileSmall}) {
    height: 6.519rem;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
`;

export const StyledNameContainer = styled.div`
  margin: 1.25rem 0.625rem;
  text-align: center;

  @media (max-width: ${baseTheme.media.laptopSmall}) {
    margin: 1rem 0.625rem;
  }

  @media (max-width: ${baseTheme.media.tabletLarge}) {
    margin: 1.25rem 0.625rem;
  }

  @media (max-width: ${baseTheme.media.tabletSmall}) {
    margin: 1rem 0.625rem;
  }
`;
