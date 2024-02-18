import baseTheme from '@styles/theme';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const StyledContainer = styled.div<{ isVisible: boolean }>`
  width: 9.375rem;
  position: fixed;
  right: 1.25rem;
  bottom: ${(props) => (props.isVisible ? '1.25rem' : '-4.375rem')};
  transition: ${baseTheme.durations.styleAnimations} ease-out;
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)}
    ${baseTheme.durations.styleAnimations} ease-out;
  pointer-events: ${(props) => (props.isVisible ? 'auto' : 'none')};
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 2.8rem;
  border-radius: 0.5rem;
  background-color: ${baseTheme.colors.itemsBG};
  border: 2px solid ${baseTheme.colors.text};
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${baseTheme.durations.styleAnimations} ease-in;

  &:hover {
    background-color: ${baseTheme.colors.bodyBG};
    transition: ${baseTheme.durations.styleAnimations} ease-in;
  }
`;
