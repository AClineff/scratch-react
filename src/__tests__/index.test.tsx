import * as React from 'react';
import { App } from '../index';
import { render } from '@testing-library/react';

test('jest loads and runs tests', () => {
  const myVariable = '123';
  expect(myVariable).not.toBeFalsy;
});

test('the app loads and renders', () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId('application-root')).toBeInTheDocument();
});
