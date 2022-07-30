import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {

  const name = "Esteban ";

  const [value, updateValue] = useState(name);

  const [count, updateCount] = useState(0);

  useEffect (() => {
    if (count != 0) {
      updateValue('Peter');
    }
  }, [count]);

  function onClick() {
    updateCount(count + 1);
  }

  function onClick() {
    console.log('I was clicked');
    updateValue('Sebastian');
    updateCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}
        </p>
        <p>
          {value}
        </p>
        <p>
          Our counter is: {count}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onClick}>CLICK ME</button>
      </header>
    </div>
  );
}

export default App;
