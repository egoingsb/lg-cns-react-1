import {Button, ButtonGroup} from '@mui/material';
import {useEffect, useState} from 'react';
export function Counter({title, initValue}){
    const [value, setValue] = useState(initValue);
    const [step, setStep] = useState(1);
    const [history, setHistory] = useState([
      {value:1, time: '2021-10-01'},
      {value:2, time: '2021-10-02'},
    ])
      async function fetchCounter(){
        const resp = await fetch('http://localhost:9999/counter');
        const result = await resp.json();
        setValue(result.value);
      }
      useEffect(()=>{
        fetchCounter();
      }, [])
      async function up(){
        const newValue = value + step;
        const option = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({value: newValue})
        }
        const resp = await fetch('http://localhost:9999/counter',option);
        await resp.json();
        await fetchCounter();

        // 원본을 수정하면 안됩니다. 
        // history.push({value: newValue, time: '2021-10-03'});
        // setHistory(history);

        // 복제본을 수정해야 합니다. 
        const newHistory = [...history];
        newHistory.push({value: newValue, time: new Date().toLocaleString()});
        setHistory(newHistory);
      }
      const historyTag = history.map((item, index)=>{
        return <li key={index}>{item.value}, {item.time}</li>
      })
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
          <ul>
            {historyTag}
          </ul>
        </div>
      )
    }
