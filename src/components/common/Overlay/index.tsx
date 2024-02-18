import React, { PropsWithChildren } from 'react';
import StyledOverlay from './styles';

interface IComponentProps {
  clickCB: () => void;
}

const Overlay: React.FC<PropsWithChildren & IComponentProps> = ({ children, clickCB }) => {
  return <StyledOverlay onClick={clickCB}>{children}</StyledOverlay>;
};

export default Overlay;
