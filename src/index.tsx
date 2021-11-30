import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';
import './styles.css';

export const App = () => {
  return <MyComponent text="Hello World!" />;
};

ReactDOM.render(<App />, document.getElementById('app'));
