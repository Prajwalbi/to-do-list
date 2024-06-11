
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './components/routers/AppRouter';
import { AuthProvider , useAuth } from './components/contexts/authContexts';
import { login, logout } from './components/actions/auth';
import { startSetItems } from './components/actions/items';

const store = configureStore();

const AppContent = () => {
  const { userLoggedIn, loading, currentUser } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userLoggedIn && currentUser) {
      dispatch(login(currentUser.uid));
      dispatch(startSetItems());
    } else {
      dispatch(logout());
    }
  }, [userLoggedIn, currentUser, dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Optionally, render a loading spinner or similar
  }

  return <AppRouter />;
};

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </AuthProvider>
  );
};

export default App;
