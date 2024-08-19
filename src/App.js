import { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';

function Counter({title, initValue}){
const [value, setValue] = useState(initValue);
  function reset(){
    setValue(0);
  }
  function up(){
    setValue((prev) => prev+1);
  }
  function down(){
    setValue((prev) => prev-1);
  }

  const inlineStyle = {
    color:'blue',
    padding: '10px'
  }

  return (
    <div id="container" style={inlineStyle}>
      <h1 className="heading1">{title}</h1>
      <Button onClick={up} variant="contained">+</Button>
      <Button onClick={down} variant="contained">-</Button>
      <Button onClick={reset} variant="contained">0</Button>
      {value}
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter title="카운터" initValue={20}></Counter>
    </div>
  );
}

export default App;
