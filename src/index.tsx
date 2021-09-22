import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';
import './styles.css';

export const App = () => {
  return (
    <div data-testid="application-root">
      <MyComponent text="Hello World!" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
