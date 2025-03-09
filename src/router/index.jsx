import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import HomePage from "../pages/HomePage";
import TourList from "../pages/TourList";
import TourInfo from "../pages/TourInfo";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";


const router = createHashRouter([
  {
    path: "/",
    element: <FrontLayout />,
    children: [{
      path: "",
      element: <HomePage />
    },
    {
      path: "products",
      element: <TourList />
    },
    {
      path: "products/:id",
      element: <TourInfo />
    },
    {
      path: "cart",
      element: <Cart />
    }
  ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
])

export default router;