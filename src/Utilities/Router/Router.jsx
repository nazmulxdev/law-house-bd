import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RingLoader } from "react-spinners";
import Root from "../../Components/Root/Root";
import ErrorElements from "../../Pages/ErrorElements/ErrorElements";
import Home from "../../Pages/Home/Home";
import SingleLawyerDetails from "../../Pages/SingleLawyerDetails/SingleLawyerDetails";
import Blogs from "../../Pages/Blogs/Blogs";
import MyBookings from "../../Pages/MyBookings/MyBookings";
import ErrorId from "../../Pages/ErrorId/ErrorId";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense
            fallback={
              <RingLoader
                color="#0EA106"
                size={200}
                speedMultiplier={1}
                className="mx-auto"
              ></RingLoader>
            }
          >
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/lawyer/:license_no",
        element: (
          <Suspense
            fallback={
              <RingLoader
                color="#0EA106"
                size={200}
                speedMultiplier={1}
                className="mx-auto"
              ></RingLoader>
            }
          >
            <SingleLawyerDetails></SingleLawyerDetails>
          </Suspense>
        ),
        errorElement: <ErrorId></ErrorId>,
      },
      {
        path: "/my-booking",
        element: (
          <Suspense
            fallback={
              <RingLoader
                color="#0EA106"
                size={200}
                speedMultiplier={1}
                className="mx-auto"
              ></RingLoader>
            }
          >
            <MyBookings></MyBookings>
          </Suspense>
        ),
      },
      {
        path: "/blogs-page",
        loader: () => fetch("/blogs.json"),
        element: (
          <Suspense
            fallback={
              <RingLoader
                color="#0EA106"
                size={200}
                speedMultiplier={1}
                className="mx-auto"
              ></RingLoader>
            }
          >
            <Blogs></Blogs>
          </Suspense>
        ),
      },
    ],
  },
]);
export default Router;
