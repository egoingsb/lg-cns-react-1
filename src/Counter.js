import {Button, ButtonGroup} from '@mui/material';
import {useEffect, useState} from 'react';
export function Counter({title, initValue}){
    const [value, setValue] = useState(initValue);
      async function fetchCounter(){
        const resp = await fetch('http://localhost:9999/counter');
        const result = await resp.json();
        setValue(result.value);
      }
      useEffect(()=>{
        // fetch('http://localhost:9999/counter')
        // .then(resp=>{
        //   return resp.json()
        // })
        // .then(result=>{
        //   setValue(result.value)
        // });
        fetchCounter();
      }, [])

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
