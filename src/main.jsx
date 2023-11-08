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
        element: <MyJobs></MyJobs>,
        loader: () => fetch('http://localhost:4321/allJobs')
      },
      {
        path: '/appliedJob',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/update/:id',
        element: <UpdatePage></UpdatePage>,
        loader: ({params}) => fetch(`http://localhost:4321/allJobs/${params.id}`)
      },
      {
        path: '/allJob',
        element: <AllJobs></AllJobs>,
        loader: () => fetch('http://localhost:4321/allJobs')
      },
      {
        path: '/details/:id',
        element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
        loader: () => fetch('http://localhost:4321/allJobs')
      },
      {
        path: '/appliedJobDetails/:id',
        element: <PrivateRouter><AppliedJobDetails></AppliedJobDetails></PrivateRouter>,
        loader: () => fetch('http://localhost:4321/allJobs')
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
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
