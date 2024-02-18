import baseTheme from '@styles/theme';
import { styled } from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${baseTheme.colors.text};

  @media (max-width: ${baseTheme.media.tabletXLarge}) {
    font-size: 0.9rem;
  }
`;

export default StyledParagraph;
