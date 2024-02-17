import { styled } from 'styled-components';
import baseTheme from '@styles/theme';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${baseTheme.sizes.spaces[5]};
  background-color: ${baseTheme.colors.itemsBG};
  border-bottom-right-radius: ${baseTheme.sizes.spaces[0]};
  border-bottom-left-radius: ${baseTheme.sizes.spaces[0]};
`;

export default StyledHeader;
