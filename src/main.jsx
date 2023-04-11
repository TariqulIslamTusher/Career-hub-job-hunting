import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import JobDetails from './component/JobDetails';
import ErrorPage from './component/ErrorPage';
import Root from './Root';
import AppliedJobList from './component/AppliedJobList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/companyDetails.json')        
      },
      {
        path:'/jobDetails/:jobId',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/companyDetails.json')         
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/appliedJobList',
        element: <AppliedJobList></AppliedJobList>
      }
     
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
