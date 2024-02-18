import baseTheme from '@styles/theme';
import { keyframes, styled } from 'styled-components';

const loaderAnimation = keyframes`
  0% {
    top: 0.5rem;
    height: 4rem;
  }

  50%,
  100% {
    top: 1.5rem;
    height: 2rem;
  }
`;

export const StyledLoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 14.5rem;
  height: 5rem;
  background-color: ${baseTheme.colors.itemsBG};
  border-radius: 0.5rem;
`;

export const StyledLoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  background-color: ${baseTheme.colors.itemsBG};
`;

export const StyledLoaderItem = styled.div`
  display: inline-block;
  position: absolute;
  left: 0.5rem;
  width: 1rem;
  background: ${baseTheme.colors.bodyBG};
  animation: ${loaderAnimation} ${baseTheme.durations.loader.keyframes} cubic-bezier(0, 0.5, 0.5, 1)
    infinite;

  &:nth-child(1) {
    left: 0.5rem;
    animation-delay: ${baseTheme.durations.loader.firstLoader};
  }

  &:nth-child(2) {
    left: 2rem;
    animation-delay: ${baseTheme.durations.loader.secondLoader};
  }

  &:nth-child(3) {
    left: 3.5rem;
    animation-delay: 0;
  }
`;
