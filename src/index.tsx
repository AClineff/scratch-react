import React from 'react';
import ReactDOM from 'react-dom';

export const App = () => {
  return <div data-testid="application-root">Hello</div>;
};

ReactDOM.render(<App />, document.getElementById('app'));
