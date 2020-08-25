import React from 'react';
import Challenge from './componetsChallenge/Challenge-one'

function Textoimput() { 
  const [text, setTexto] = React.useState('');
    return (
      <div>
        <Challenge />
      </div>  
    )
  }
export default Textoimput;
