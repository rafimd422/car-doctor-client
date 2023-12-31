import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import axios from "axios";
import CheakOut from "../Pages/Cheakout/CheakOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from './../PrivateRoute/PrivateRoute';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/serviceDetails/:id",
        element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
        loader: ({ params }) =>
          axios.get(`http://localhost:4000/services/${params.id}`),
      },
      {
        path: "/cheakout/:id",
        element: <PrivateRoute><CheakOut /></PrivateRoute>,
        loader: ({ params }) =>
          axios.get(`http://localhost:4000/services/${params.id}`),
      },
    ],
  },
]);
export default Router;
