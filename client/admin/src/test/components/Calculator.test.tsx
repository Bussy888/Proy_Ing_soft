import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculator from './Calculator';

test('Mostrar el resultado correcto al realizar operaciones', () => {
  const { getByText, getByTestId } = render(<Calculator />);
  const display = getByTestId('display');

  // Realizar una operación válida (por ejemplo, 2 + 3)
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  
  expect(display).toHaveTextContent('5');
});

test('Mostrar un mensaje de error en entradas no válidas', () => {
  const { getByText, getByTestId } = render(<Calculator />);
  const display = getByTestId('display');

  // Ingresar una entrada no válida (por ejemplo, "abc")
  fireEvent.click(getByText('a'));
  fireEvent.click(getByText('b'));
  fireEvent.click(getByText('c'));
  fireEvent.click(getByText('='));
  
  expect(display).toHaveTextContent('Error');
});