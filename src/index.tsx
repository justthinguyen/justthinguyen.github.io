import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import App from './App';
import { pagesKey } from './siteInfo';

import './index.css';

interface props { page?: string }
const Root = (ps: props) => (<div><h2>Hi there!</h2> Nothing in {ps.page} yet, but Thi is diligently working on this. Please stay tune! </div>);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<ErrorPage />}>
            <Route errorElement={<ErrorPage />}>
                <Route index element={<Home />} />
                <Route path={pagesKey['coding']['path']} element={<Root page={pagesKey['coding']['name']} />} />
                <Route path={pagesKey['blog']['path']} element={<Root page={pagesKey['blog']['name']} />} />
                <Route path={pagesKey['project']['path']} element={<Root page={pagesKey['project']['name']} />} />
                <Route path={pagesKey['resume']['path']} element={<Root page={pagesKey['resume']['name']} />} />
            </Route>
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