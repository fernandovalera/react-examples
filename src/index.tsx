import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/Root';
import ProjectsAddWithForm from './routes/Projects.AddWithForm';
import ProjectsAddWithUseState from './routes/Projects.AddWithUseState';
import Users from './routes/Users';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'projects',
        element: <ProjectsAddWithForm />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/alt1',
    element: <Root />,
    children: [
      {
        path: 'projects',
        element: <ProjectsAddWithUseState />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
