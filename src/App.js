import { useState } from 'react';
import './App.css';
import { Button, ButtonGroup, Container, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Counter } from './Counter';
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
