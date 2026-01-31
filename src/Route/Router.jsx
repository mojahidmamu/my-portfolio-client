import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"; 
import Home from "../Pages/Homes/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Projects from "../Pages/Projects/Projects";
import FeautureBlog from "../Pages/FeautureBlog/FeautureBlog";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/about',
          element: <AboutMe></AboutMe>,
        },
        {
          path: '/projects',
          element: <Projects></Projects>,
        },
        {
          path: "/blogs",
          element: <FeautureBlog></FeautureBlog>
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
    ],
  },
]);
