import * as React from 'react';

interface Props {
  text?: string;
}

const MyComponent = ({ text }: Props) => {
  if (!text) return null;
  return (
    <div className="container bg-gray-400" data-testid="my-component">
      {text}
    </div>
  );
};

export default MyComponent;
