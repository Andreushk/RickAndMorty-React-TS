import React from 'react';
import GlobalStyles from './styles/global';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div>Content here</div>
    </>
  );
};

export default App;
