import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
const Calculator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      // Limpiar la pantalla
      setInputValue('');
      setResult('');
    } else if (value === 'Borrar') {
      // Borrar el último carácter
      setInputValue(inputValue.slice(0, -1));
    } else if (value === '=') {
      // Calcular el resultado
      try {
        const evalResult = eval(inputValue);
        setInputValue('');
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      // Agregar el valor al input
      setInputValue(inputValue + value);
    }
  };

  return (
    <Container maxWidth="sm">
        <h2>Calculadora Cientifica</h2>
    <div className="calculator">
        <div className="title">Entrada:</div>
        <Box sx={{width: 200, height: 25,
        backgroundColor: 'primary.dark','&:hover': {backgroundColor: 'primary.main',opacity: [0.9, 0.8, 0.7],
        }, }}>

        <div className="display">{inputValue}</div>
        </Box>
      
        <div className="title">Resultado:</div>
        <Box sx={{width: 200, height: 25,
        backgroundColor: 'primary.dark','&:hover': {backgroundColor: 'primary.main',opacity: [0.9, 0.8, 0.7],
        }, }}>
        <div className="display">{result}</div>
      </Box>


      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('C')}>C</button>
          <button onClick={() => handleButtonClick('Borrar')}>←</button>
          <button onClick={() => handleButtonClick('%')}>%</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
      </Container>
  );
};

export default Calculator;