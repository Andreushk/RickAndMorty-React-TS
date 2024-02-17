import React, { PropsWithChildren } from 'react';
import GlobalStyles from '@styles/global';

const WithGlobalStyles: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default WithGlobalStyles;
