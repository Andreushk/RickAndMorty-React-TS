import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WithGlobalStyles from '@hoc/withGlobalStyles';

const App: React.FC = () => {
  return (
    <WithGlobalStyles>
      <Header />
      <div>Content here</div>
      <Footer />
    </WithGlobalStyles>
  );
};

export default App;
