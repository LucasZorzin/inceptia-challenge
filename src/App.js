import React from 'react';
import UseContextProvider from './context/ApiContext';
import './App.scss';
import Panel from './components/Panel/Panel';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <>
    <Loader/>
      <UseContextProvider>
        <Panel/>
      </UseContextProvider>
      
    </>
  );
}

export default App;
