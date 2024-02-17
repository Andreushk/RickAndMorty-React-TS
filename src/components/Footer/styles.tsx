import baseTheme from '@styles/theme';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${baseTheme.colors.itemsBG};
  height: ${baseTheme.sizes.footer.height};
  border-top-left-radius: ${baseTheme.sizes.spaces[0]};
  border-top-right-radius: ${baseTheme.sizes.spaces[0]};
`;

export const StyledLogoImage = styled.img`
  width: ${baseTheme.sizes.footerImage.width};
  height: auto;
`;
