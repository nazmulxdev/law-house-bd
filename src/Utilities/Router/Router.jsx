import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../Components/Root/Root";
import ErrorElements from "../../Pages/ErrorElements/ErrorElements";
import Home from "../../Pages/Home/Home";
import SingleLawyerDetails from "../../Pages/SingleLawyerDetails/SingleLawyerDetails";
import Blogs from "../../Pages/Blogs/Blogs";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "lawyer/:license_no",
        loader: ({ params }) => fetch("lawyers_data.json"),
        Component: SingleLawyerDetails,
      },
      {
        path: "blogs",
        loader: () => fetch("blogs.json"),
        Component: Blogs,
      },
    ],
  },
]);
export default Router;
