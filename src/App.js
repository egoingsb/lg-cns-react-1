import './App.css';

function Counter(props){
  console.log(props); 
  return (
    <div>
      <h1>{props.title}</h1>
      <button>+</button> {props.initValue}
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter title="카운터" initValue="20"></Counter>
    </div>
  );
}

export default App;
