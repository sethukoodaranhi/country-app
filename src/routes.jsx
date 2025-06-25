import { Navigate } from "react-router-dom";
import Login from "./view/auth/Login";
import HomePage from "./view/home/HomePage";

const routes =[
  {
    index:true,
    element: <Login />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />
  }
];

export default routes;
