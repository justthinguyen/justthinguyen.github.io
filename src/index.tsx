import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet-async';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import CodingPage from './pages/CodingPage';
import ResumePage from './pages/ResumePage';
import ProjectPage from './pages/ProjectPage';
import App from './App';
import { pagesKey } from './siteInfo';
import { fullName, mainSiteDescription } from './contents/MyInfo';

import './index.css';

interface props { page?: string }
const Root = (ps: props) =>
(<>
    <Helmet>
        <title>{fullName} - {ps.page}</title>
        <meta name='description' content={mainSiteDescription + ' ' + ps.page} />
    </Helmet>
    <div>
        <h2>Hi there!</h2>
        Nothing in {ps.page} yet, but Thi is diligently working on this. Please stay tune!
    </div>
</>
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<ErrorPage />}>
            <Route errorElement={<ErrorPage />}>
                <Route index element={<Home />} />
                <Route path={pagesKey['coding']['path']} element={<CodingPage />} />
                <Route path={pagesKey['blog']['path']} element={<Root page={pagesKey['blog']['name']} />} />
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