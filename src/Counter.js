import {Button, ButtonGroup} from '@mui/material';
import {useEffect, useState} from 'react';
export function Counter({title, initValue}){
    const [value, setValue] = useState(initValue);
    const [step, setStep] = useState(1);
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
          body: JSON.stringify({value: value+step})
        }
        const resp = await fetch('http://localhost:9999/counter',option);
        await resp.json();
        await fetchCounter();
      }
      return (
        <div>
          <h1 className="heading1">{title}</h1>
          <input type="text" value={step} onChange={evt=>{
            setStep(Number(evt.target.value));
          }} />
          <ButtonGroup variant="contained">
            <Button onClick={up}>+</Button>
          </ButtonGroup>
          {value}
        </div>
      )
    }
