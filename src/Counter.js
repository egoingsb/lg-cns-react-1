import {Button, ButtonGroup} from '@mui/material';
import {useState} from 'react';
export function Counter({title, initValue}){
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

export function Hi(){
    return <div>HI</div>
}