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
import AllJobs from './components/page/alljobs/AllJobs.jsx';
import JobDetails from './components/privateRouter/JobDetails.jsx';
import PrivateRouter from './components/privateRouter/PrivateRouter.jsx';
import AppliedJobDetails from './components/privateRouter/AppliedJobDetails.jsx';
import Blog from './components/utility/Blog.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://job-hustle-server-aa2pkq272-md-sifat-ikrams-projects.vercel.app/allJobs')
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/addJob',
        element: <PrivateRouter><AddJob></AddJob></PrivateRouter>
      },
      {
        path: '/myJob',
        element: <PrivateRouter><MyJobs></MyJobs></PrivateRouter>,
      },
      {
        path: '/appliedJob',
        element: <PrivateRouter><AppliedJobs></AppliedJobs></PrivateRouter>,
        loader: () => fetch('https://job-hustle-server-aa2pkq272-md-sifat-ikrams-projects.vercel.app/allJobs')
      },
      {
        path: '/update/:id',
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) => fetch(`https://job-hustle-server-aa2pkq272-md-sifat-ikrams-projects.vercel.app/allJobs/${params._id}`)
      },
      {
        path: '/allJob',
        element: <AllJobs></AllJobs>,
        loader: () => fetch('https://job-hustle-server-aa2pkq272-md-sifat-ikrams-projects.vercel.app/allJobs')
      },
      {
        path: '/details/:id',
        element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
        loader: () => fetch('https://job-hustle-server-aa2pkq272-md-sifat-ikrams-projects.vercel.app/allJobs')
      },
      {
        path: '/appliedJobDetails/:id',
        element: <PrivateRouter><AppliedJobDetails></AppliedJobDetails></PrivateRouter>,
        loader: () => fetch('https://job-hustle-server-aa2pkq272-md-sifat-ikrams-projects.vercel.app/allJobs')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
