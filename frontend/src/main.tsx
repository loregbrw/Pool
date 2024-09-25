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
import { Calendars } from './pages/calendars/index.tsx';
import { Profile } from './pages/profile/index.tsx';
import { ThemeProvider } from './context/theme.tsx';
import { Config } from './pages/config/index.tsx';

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
    path: "/config",
    element:
      <App>
        <Config />
      </App>
  },
  {
    path: "/calendar",
    element:
      <App>
        <Calendars />
      </App>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>
);