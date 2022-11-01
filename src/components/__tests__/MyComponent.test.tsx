import * as React from 'react';
import { render } from '@testing-library/react';
import MyComponent from '../MyComponent';

test('it renders the component', () => {
  const { getByText } = render(<MyComponent text="Hello World" />);

  expect(getByText('Hello World')).toBeTruthy();
});

test('it does not render the component when text is not provided', () => {
  const { queryByTestId } = render(<MyComponent />);
  expect(queryByTestId('my-component')).toBeFalsy();
});
