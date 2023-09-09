
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Para usar las funciones de jest-dom

import SumCalculator from '../../components/SumCalculator';

test('SumCalculator muestra resultado correcto al sumar', () => {
  const { getByPlaceholderText, getByText } = render(<SumCalculator />);
  const num1Input = getByPlaceholderText('Número 1');
  const num2Input = getByPlaceholderText('Número 2');
  const sumButton = getByText('Sumar');

  fireEvent.change(num1Input, { target: { value: '5' } });
  fireEvent.change(num2Input, { target: { value: '3' } });
  fireEvent.click(sumButton);

  const result = getByText('Resultado: 8');
  expect(result);
});

test('SumCalculator muestra mensaje de error en entradas no válidas', () => {
  const { getByPlaceholderText, getByText } = render(<SumCalculator />);
  const num1Input = getByPlaceholderText('Número 1');
  const num2Input = getByPlaceholderText('Número 2');
  const sumButton = getByText('Sumar');

  fireEvent.change(num1Input, { target: { value: 'abc' } });
  fireEvent.change(num2Input, { target: { value: '3' } });
  fireEvent.click(sumButton);

  const errorResult = getByText('Resultado: Entradas no válidas');
  expect(errorResult);
});