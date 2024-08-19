import { useState } from 'react';
import './App.css';
import { Button, ButtonGroup, Container, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Counter } from './Counter';
function App() {
  return (
    <Container maxWidth="md">
      <Counter title="카운터" initValue={20}></Counter>
    </Container>
  );
}

export default App;
