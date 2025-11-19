import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import PlantDetails from "../pages/PlantDetails";
import Plants from "../pages/Plants";
import Profile from "../pages/Profile";

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
        element: <Profile></Profile>,
      },
      {
        path: "/plant-details/:id",
        element: <PlantDetails></PlantDetails>,
      },
    ],
  },
]);
