import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dictionary from './components/Dictionary';
import Home from './components/Home';
import Contact from './components/Contact';

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/contact', element: <Contact/> },
  { path: '/app', element: <Dictionary/> },
])

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;