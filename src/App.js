import { useState } from 'react';
import './App.css';

function Counter({title, initValue}){
  // let value = initValue;
  let valueState = useState(initValue);
  let value = valueState[0];
  let setValue = valueState[1];
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
      <Counter title="불면증 카운터" initValue={40}></Counter>
    </div>
  );
}

export default App;
