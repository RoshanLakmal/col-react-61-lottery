import React from 'react';
import './App.css';
import Lottery from './Lottery';
function App() {
  return (
    <div className="App">
      <Lottery title="Mini" numBalls="4" maxNum="10"/>
      <Lottery title="Big" numBalls="6" maxNum="40"/>
    </div>
  );
}

export default App;
