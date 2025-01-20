import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Product from "../Components/Product/Product";
import Error from "../Components/Error/Error";
import CatalogIndex from "../Components/Catalog/CatalogIndex";
import PartnershopIndex from "../Components/Partnershop/PartnershopIndex";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "catalog",
        element: <CatalogIndex />,
      },
      {
        path: "partnershop",
        element: <PartnershopIndex />,
      },
      {
        path: "product",
        element: <Product />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
