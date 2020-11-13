import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Alert from './components/Alert';

const App = () => {
  return (
    <>
      <Header title="FlightScanner" />
      <Alert />
      <Home />
    </>
  );
};

export default App;
