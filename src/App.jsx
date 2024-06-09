import { useState } from 'react'
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux'
import configureStore from './components/store/configureStore';


const App  = () =>  {
  const store = configureStore();
  return (<div>
     <Provider store={store}>
        <Dashboard />
    </Provider>
  </div>);
}

export default App
