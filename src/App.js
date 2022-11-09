import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-249112502-1';

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview('/home');
  });

  const onTextClick = () => {
    console.log('onTextClick');
    ReactGA.event({
      category: 'Button',
      action: 'Button clicked',
      label: 'Test',
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onTextClick} style={{ cursor: 'pointer' }}>
          Edit <code>src/App.js</code> and save to reload updated again.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
