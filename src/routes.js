import Home from "./pages/home";
import { ProductDetail } from "./pages/ProductDetail";

const routes=[
    { path: "/", element: <Home /> },
    { path: "products/:id", element: <ProductDetail/> },
    { path: "*", element: <h1>Not found</h1> },
  ];

  export default routes;