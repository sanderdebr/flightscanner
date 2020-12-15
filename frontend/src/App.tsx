import React, { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { store } from './redux/store';
import loadUser from './redux/user/actions';

const Alert = lazy(() => import('./components/Alert'));
const LoginModal = lazy(() => import('./components/LoginModal'));

const App: React.FC<any> = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Header title="FlightScanner" />
      <Suspense fallback>
        <Alert />
        <LoginModal />
      </Suspense>
      <Home />
    </>
  );
};

export default App;
