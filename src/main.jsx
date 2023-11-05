import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/page/Home.jsx';
import ErrorPage from './components/page/ErrorPage.jsx';
import SignUp from './components/page/sign/SignUp.jsx';
import SignIn from './components/page/sign/SignIn.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      }
]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
