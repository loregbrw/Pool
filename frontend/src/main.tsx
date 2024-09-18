import './index.css'

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import { App } from './App.tsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Initial } from './pages/initial/index.tsx';
import { Login } from './pages/login/index.tsx';
import { SignUp } from './pages/signup/index.tsx';
import { Home } from './pages/home/index.tsx';
import { Project } from './pages/project/index.tsx';
import { Calendar } from './pages/calendar/index.tsx';
import { Profile } from './pages/profile/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Initial />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/home",
    element:
      <App>
        <Home />
      </App>
  },
  {
    path: "/project/:id",
    element:
      <App>
        <Project />
      </App>
  },
  {
    path: "/profile",
    element:
      <App>
        <Profile />
      </App>
  },
  {
    path: "/calendar",
    element:
      <App>
        <Calendar />
      </App>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);