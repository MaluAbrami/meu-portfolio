import React from 'react';
import Navbar from './componets/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
