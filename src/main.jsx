import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './components/TodoApp';
import TodoApplication from './components/TodoApplication';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginWithFormik from './pages/LoginWithFormik';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import BlogDetail from './pages/BlogDetail';

const container = document.getElementById('main');
const root = ReactDOM.createRoot(container);

// React Fragment shorthand syntax <>
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<TodoApp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  </HashRouter>
);
