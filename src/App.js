import { useState } from 'react';
import './App.css';
import { Button, ButtonGroup, Container, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

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
    <div>
      <h1 className="heading1">{title}</h1>
      <ButtonGroup variant="contained">
        <Button onClick={up}>+</Button>
        <Button onClick={down}>-</Button>
        <Button onClick={reset}>0</Button>
      </ButtonGroup>
      {value}
    </div>
  )
}

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <Container maxWidth="md">
      <Counter title="카운터" initValue={20}></Counter>

      <Dialog open={dialogOpen} onClose={()=>{setDialogOpen(false)}}>
        <DialogTitle>카운터</DialogTitle>
        <DialogContent>
          <Counter title="다이얼로그 카운터" initValue={10}></Counter>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
            setDialogOpen(false);
          }}>닫기</Button>
        </DialogActions>
      </Dialog>

      <Button onClick={()=>{
        setDialogOpen(true);
      }} variant="contained">Open Counter</Button>
    </Container>
  );
}

export default App;
