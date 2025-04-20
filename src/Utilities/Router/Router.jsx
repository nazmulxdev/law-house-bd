import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../Components/Root/Root";
import ErrorElements from "../../Pages/ErrorElements/ErrorElements";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorElements></ErrorElements>,
    children: [{}],
  },
]);
export default Router;
