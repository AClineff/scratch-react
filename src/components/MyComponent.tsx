import * as React from 'react';

interface Props {
  text: string;
}

const MyComponent = ({ text }: Props) => {
  if (!text) return null;
  return <div data-testid="my-component">{text}</div>;
};

export default MyComponent;
