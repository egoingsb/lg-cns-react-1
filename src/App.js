import './App.css';

function Counter({title, initValue}){
  return (
    <div>
      <h1>{title}</h1>
      <button>+</button> {initValue}
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
