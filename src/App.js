import { useState } from 'react';
import './App.css';

function Counter({title, initValue}){
  const [value, setValue] = useState(initValue);
  function up(){
    setValue(value + 1)
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={up}>+</button> {value}
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
