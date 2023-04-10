import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './component/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import JobDetails from './component/JobDetails';
import ErrorPage from './component/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('companyDetails.json')
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/jobDetails/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({params})=>fetch(`companyDetails.json${params.jobId}`)
      }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
