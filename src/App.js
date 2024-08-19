import { useState } from 'react';
import './App.css';

function Counter({title, initValue}){
const [value, setValue] = useState(initValue);
  function reset(){
    setValue(0);
  }
  // 하면 좋고, 안해도 왠만하면 괜찮은 부분
  function down(){
    setValue((prev) => prev-1);
  }

  const inlineStyle = {
    color:'blue',
    backgroundColor:'gray',
    padding: '10px'
  }

  return (
    <div id="container" style={inlineStyle}>
      <h1 className="heading1">{title}</h1>
      <button onClick={() => setValue(value + 1)}>+</button> 
      <button onClick={down}>-</button> 
      <button onClick={reset}>0</button>
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
