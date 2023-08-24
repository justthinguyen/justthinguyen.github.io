import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import CodingPage from './pages/CodingPage';
import ResumePage from './pages/ResumePage';
import ProjectPage from './pages/ProjectPage';
import Blog from './pages/Blog';
import App from './App';
import { pagesKey } from './siteInfo';

import './index.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<ErrorPage />}>
            <Route errorElement={<ErrorPage />}>
                <Route index element={<Home />} />
                <Route path={pagesKey['coding']['path']} element={<CodingPage />} />
                <Route path={pagesKey['blog']['path']} element={<Blog />} />
                <Route path={pagesKey['project']['path']} element={<ProjectPage />} />
                <Route path={pagesKey['resume']['path']} element={<ResumePage />} />
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