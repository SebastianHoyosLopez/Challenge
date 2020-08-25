import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function TextImput() { 
  const [text, setText] = React.useState('');
    return (
      <div>
        <header className="container">
          <div className="mt-5 col">
            <strong>Escribe algo en este div: </strong>
            {text}
          </div>
          <input 
            onChange={(e) => {
              setText(e.target.value)
            }} 
            type="text" 
            name="textoinput"
            value={text.textoinput} />
        </header>
      </div>  
    )
  }
export default TextImput;
