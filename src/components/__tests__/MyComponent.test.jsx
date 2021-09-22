import * as React from 'react';
import { render } from '@testing-library/react';
import MyComponent from '../MyComponent';

test('it renders the component', async () => {
  const { findByText } = render(<MyComponent text="Hello World" />);

  expect(await findByText('Hello World')).toBeInTheDocument();
});

test('it does not render the component when text is not provided', () => {
  const { queryByTestId } = render(<MyComponent />);
  expect(queryByTestId('my-component')).not.toBeInTheDocument();
});
