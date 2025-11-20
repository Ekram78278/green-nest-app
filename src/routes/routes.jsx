import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import PlantDetails from "../pages/PlantDetails";
import Plants from "../pages/Plants";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/public/plants.json"),
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
        ,
      },
      {
        path: "/plant-details/:id",
        element: <PrivateRoute><PlantDetails></PlantDetails></PrivateRoute>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
     {
      path:'/register',
      element:<Register></Register>
     }
    ],

    
  },
  {
    path:'/*',
    element:<div className="flex flex-col justify-center items-center text-8xl">Error 404 !!</div>
  }
]);
