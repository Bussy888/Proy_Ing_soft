import React, { useState } from 'react';

const SumCalculator: React.FC = () => {
  const [num1, setNum1] = useState<number | string>('');
  const [num2, setNum2] = useState<number | string>('');
  const [result, setResult] = useState<number | string>('');

  const handleSum = () => {
    const parsedNum1 = parseFloat(num1 as string);
    const parsedNum2 = parseFloat(num2 as string);

    if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
      const sum = parsedNum1 + parsedNum2;
      setResult(sum);
    } else {
      setResult('Entradas no válidas');
    }
  };

  return (
    <div>
      <h2>Calculadora de Suma</h2>
      <input
        type="text"
         placeholder="Número 1"
         value={num1}
         onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleSum}>Sumar</button>
      <div>Resultado: {result}</div>
    </div>
  );
};

export default SumCalculator;