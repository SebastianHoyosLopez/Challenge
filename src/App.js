import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
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
