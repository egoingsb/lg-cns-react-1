import {Button, ButtonGroup} from '@mui/material';
import {useEffect, useState} from 'react';
export function Counter({title, initValue}){
    const [value, setValue] = useState(initValue);

      // http://localhost:9999/counter에서 데이터를 가져오고
      // 그 데이터는 json 타입이니까 파싱을 해서 js의 데이터로 변환하고
      // 그 결과 값인 value를 setValue로 설정한다.
      // 위의 코드는 단한번 실행되어야 한다.  

      useEffect(()=>{
        fetch('http://localhost:9999/counter')
        .then(resp=>resp.json())
        .then(result=>setValue(result.value));
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
