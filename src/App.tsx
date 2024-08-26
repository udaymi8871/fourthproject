import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NiviReact from './uday'

function App() {
  const [car, setcar] = useState<number>(0)
  return (
    <div>
      <p>carbrand</p>
      <NiviReact
        car={car}
        setCar={setcar}
      />
    </div>
  );
}

export default App;
