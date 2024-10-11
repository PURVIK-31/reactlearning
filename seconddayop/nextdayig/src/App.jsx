// App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const arr = ["phoe", "phoenix", "omgah"];
  return (
    <div>
      {arr.map((value, index) => (
        <div key={index}>THE NAME OF THE GOAT IS : {value}</div>
      ))}
    </div>
  );
}

export default App;