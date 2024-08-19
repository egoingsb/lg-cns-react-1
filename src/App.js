import { useState } from 'react';
import './App.css';

function Counter({title, initValue}){
const [value, setValue] = useState(initValue);
  function reset(){
    setValue(0);
  }
  // 꼭 이해해야 하는 부분
  function up(){
    setValue(value + 1);
  }
  // 하면 좋고, 안해도 왠만하면 괜찮은 부분
  function down(){
    function callback(prev){
      console.log('prev', prev);
      return prev - 1;
    }
    setValue(callback);
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={up}>+</button> 
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
