import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Order from "../pages/Order";
import Cart from "../pages/Cart";
import Check from "../pages/Check";
import Home from "../pages/Home";
import Reservation from "../pages/Reservation";
import OurMenu from "../pages/Ourmenu";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Check />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "Ordermeal",
        element: <Order />,
      },
      {
        path: "ourmenu",
        element: <OurMenu />,
      },
    ],
  },
]);
