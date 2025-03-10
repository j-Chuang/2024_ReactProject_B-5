import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import HomePage from "../pages/HomePage";
import TourList from "../pages/TourList";
import TourInfo from "../pages/TourInfo";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import Login from "../pages/Login";



const router = createHashRouter([
  {
    path: "/",
    element: <FrontLayout />,
    children: [{
      path: "",
      element: <HomePage />
    },
    {
      path: "tourList",
      element: <TourList />
    },
    {
      path: "tourInfo/:id",
      element: <TourInfo />
    },
    {
      path: "cart",
      element: <Cart />
    }
  ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <NotFound />,
  }
])

export default router;