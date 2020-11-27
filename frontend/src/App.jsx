import React, { useEffect } from 'react';
import Alert from './components/Alert';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import { store } from './redux/store';
import loadUser from './redux/user/actions';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
