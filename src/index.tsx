import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import './index.css';

interface props {page?: string}
const Root = (ps: props ) => (<div>HI THERE! We are in {ps.page}</div>);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<ErrorPage />}>
      <Route path="/coding" element={<Root page="Coding" />} />
      <Route path="/blog" element={<Root page="Blog" />} />
      <Route path="/resume" element={<Root page="Resume" />} />
      <Route path="/work-with-me" element={<Root page="Work with Me" />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);