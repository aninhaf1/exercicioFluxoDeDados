import StyledGlobal, { Corpo } from './styledGlobal';
import Filho from "./components/Filho/Filho";
import { useState } from 'react';

function App() {
  const [state, setState] = useState('')
  const changeState = ()=>{
     setState('O estado foi atualizado!')
  }
  return (
    <>
    <StyledGlobal/> 
    <Corpo>
      <p>App</p>
      {state}
      <Filho funcao={changeState}/>
    </Corpo>
    </>
  );
}

export default App;