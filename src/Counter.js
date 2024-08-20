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
        fetchCounter();
      }, [])
      async function up(){
        const option = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({value: value+1})
        }
        const resp = await fetch('http://localhost:9999/counter',option);
        await resp.json();
        await fetchCounter();
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
          </ButtonGroup>
          {value}
        </div>
      )
    }
