import React from 'react';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Navbar />
      <Home />
    </AppContainer>
  );
};

export default App;
