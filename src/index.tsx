import React from 'react';
import { createRoot } from 'react-dom/client';
import MyComponent from './components/MyComponent';
import './styles.css';

export const App = () => {
  return <MyComponent text="Hello World!" />;
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(App());
