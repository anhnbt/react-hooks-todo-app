import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './components/TodoApp';
import TodoApplication from './components/TodoApplication';

const container = document.getElementById('main');
const root = ReactDOM.createRoot(container);

// React Fragment shorthand syntax <>
root.render(<TodoApp />);
