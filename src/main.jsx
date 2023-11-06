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
import AuthProvider from './components/provider/AuthProvider.jsx';
import AddJob from './components/privateRouter/AddJob.jsx';
import MyJobs from './components/privateRouter/MyJobs.jsx';
import AppliedJobs from './components/privateRouter/AppliedJobs.jsx';
import UpdatePage from './components/privateRouter/UpdatePage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('http://localhost:4321/allJobs')
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/addJob',
        element: <AddJob></AddJob>
      },
      {
        path: '/myJob',
        element: <MyJobs></MyJobs>
      },
      {
        path: '/appliedJob',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/update',
        element: <UpdatePage></UpdatePage>
      }
]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
