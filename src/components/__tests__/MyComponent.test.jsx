import * as React from 'react';
import { render } from '@testing-library/react';
import MyComponent from '../MyComponent';

test('it renders the component', async () => {
  const { findByText } = render(<MyComponent text="Hello World" />);

  expect(await findByText('Hello World')).toBeInTheDocument();
});
