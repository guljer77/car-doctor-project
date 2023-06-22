import { createBrowserRouter } from "react-router-dom";
import Main from "../Lasyouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Bookings from "../Pages/Bookings/Bookings";
import Details from "../Pages/Details/Details";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details /></PrivateRoute>,
        loader: ({params}) => fetch(`https://car-doctor-server-guljer77.vercel.app/services/${params.id}`)
      },
      {
        path: '/bookings/:id',
        element: <PrivateRoute><Bookings /></PrivateRoute>,
      }
    ]
  }
])