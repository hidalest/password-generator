import React, { useState } from 'react';
import './App.scss';
import DisplayPassword from './components/DisplayPassword/DisplayPassword';
import PasswordConfigurator from './components/PasswordConfigurator/PasswordConfigurator';
import Card from './components/ui/Card/Card';

function App() {
  const [password, setPassword] = useState('P4$5W0rD');
  return (
    <div className='app'>
      <header className=''>
        <h1 className='app_title'>Password Generator</h1>
        <DisplayPassword password={password} />
      </header>

      <main>
        <Card className='app_password_configurator'>
          <PasswordConfigurator />
        </Card>
      </main>
    </div>
  );
}

export default App;
