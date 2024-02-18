import baseTheme from '@styles/theme';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: ${baseTheme.colors.itemsBG};
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
`;

export default StyledContainer;
