import baseTheme from '@styles/theme';
import { styled } from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${baseTheme.colors.text};

  @media (max-width: ${baseTheme.media.tabletXLarge}) {
    font-size: 1.063rem;
  }
`;

export default StyledTitle;
