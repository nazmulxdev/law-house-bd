import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../Components/Root/Root";
import ErrorElements from "../../Pages/ErrorElements/ErrorElements";
import Home from "../../Pages/Home/Home";
import SingleLawyerDetails from "../../Pages/SingleLawyerDetails/SingleLawyerDetails";

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
        loader: () => fetch("lawyers_data.json"),
      },
      {
        path: "/lawyer/:license_no",
        Component: SingleLawyerDetails,
      },
    ],
  },
]);
export default Router;
