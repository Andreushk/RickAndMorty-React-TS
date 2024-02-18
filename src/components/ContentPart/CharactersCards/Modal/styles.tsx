import baseTheme from '@styles/theme';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: 43.75rem;
  border-radius: 0.5rem;
  background-color: ${baseTheme.colors.itemsBG};
  align-items: center;

  @media (max-width: ${baseTheme.media.tabletXLarge}) {
    flex-direction: column;
    width: 18.75rem;
  }

  @media (max-width: ${baseTheme.media.mobileSmall}) {
    width: 15.625rem;
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  width: 42.86%;
  max-height: 18.75rem;
  height: 18.75rem;

  @media (max-width: ${baseTheme.media.tabletXLarge}) {
    width: 100%;
    height: auto;
    max-height: auto;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  @media (max-width: ${baseTheme.media.tabletXLarge}) {
    width: 100%;
    height: auto;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export const StyledInformationContainer = styled.div`
  box-sizing: border-box;
  width: 57.14%;
  height: fit-content;
  padding-left: 5%;
  padding-right: 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 45%);
  grid-column-gap: 5%;
  grid-row-gap: 1.25rem;
  justify-content: center;
  align-items: center;

  @media (max-width: ${baseTheme.media.tabletXLarge}) {
    width: 100%;
    padding: 1.5rem 0.625rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, 45%);
    grid-column-gap: 5%;
    grid-row-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledInformationItem = styled.div`
  align-self: self-start;
`;

export const StyledPlaceholderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 18.75rem;

  @media (max-width: ${baseTheme.media.tabletXLarge}) {
    width: 18.75rem;
    height: 34.063rem;
  }
`;
