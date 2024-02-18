import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentPart from './components/ContentPart';
import WithGlobalStyles from '@hoc/withGlobalStyles';

const App: React.FC = () => {
  return (
    <WithGlobalStyles>
      <Header />
      <ContentPart />
      <Footer />
    </WithGlobalStyles>
  );
};

export default App;
