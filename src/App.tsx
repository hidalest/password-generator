import React from 'react';
import './App.scss';
import DisplayPassword from './components/DisplayPassword/DisplayPassword';

function App() {
  return (
    <div className='app'>
      <header className=''>
        <h1 className='app_title'>Password Generator</h1>
        <DisplayPassword />
      </header>
    </div>
  );
}

export default App;
