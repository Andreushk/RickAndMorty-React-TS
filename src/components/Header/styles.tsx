import { styled } from 'styled-components';
import baseTheme from '@styles/theme';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  background-color: ${baseTheme.colors.itemsBG};
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  @media (${baseTheme.media.tabletMedium}) {
    border-radius: 0;
  }
`;

export default StyledHeader;
