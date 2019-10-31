import React, {useState} from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import { useButton } from './hooks/useButton'
import './App.css';

function App() {

  const [balls , setBall, clickBall] = useButton(0)
  const [strike , setStrike, clickStrike] = useButton(0)
  const [hit, setHit] = useState(0)

  if(balls === 4 || strike === 3){
    setBall(0)
    setStrike(0)
  }

  const clickHit = e => {
    setBall(0)
    setStrike(0)
    setHit(hit + 1)
  }

  const rest = e => {
    setBall(0)
    setStrike(0)
    setHit(0)
  }

  const foul = e => {
    setStrike(strike + 1)
    if(strike >= 2){
      setStrike(2)
    }
  }


  return (
    <div className="App">
      <h1>Baseball Game Scoreboard</h1>
      <Display ball={balls} strike={strike} hit={hit}/>
      <Dashboard clickBall={clickBall} clickStrike={clickStrike} clickHit={clickHit} rest={rest} foul={foul}/>
    </div>
  );
}

export default App;
