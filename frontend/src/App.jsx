import React from 'react';
import Alert from './components/Alert';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Header title="FlightScanner" />
      <Alert />
      <LoginModal />
      <Home />
    </>
  );
};

export default App;
