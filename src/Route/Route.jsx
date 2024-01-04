import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Statistics from "../Pages/Statistics/Statistics";
import AppliedPage from "../Pages/Applied Page/AppliedPage";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import JobDetails from "../Pages/JobDetails/JobDetails";

const myCreation = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Applied",
        element: <AppliedPage></AppliedPage>,
        loader: () => fetch(`/Jobs.json`),
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch(`/Jobs.json`),
      },
    ],
  },
]);

export default myCreation;
