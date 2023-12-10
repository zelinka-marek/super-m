import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, json } from "react-router-dom";
import { getProductById, getProducts } from "./api/products";
import ErrorPage from "./components/error-page";
import "./index.css";
import IndexRoute from "./routes";
import AboutRoute from "./routes/about";
import ProductRoute from "./routes/product";
import ProductDetailsRoute from "./routes/product-details";
import ProductNutritionRoute from "./routes/product-nutrition";
import ProductsRoute from "./routes/products";
import RootRoute from "./routes/root";
import ProductStorageRoute from "./routes/product-storage";

let router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: (
      <div className="flex h-full items-center justify-center bg-gray-100">
        <ErrorPage />
      </div>
    ),
    children: [
      { index: true, element: <IndexRoute /> },
      { path: "/about", element: <AboutRoute /> },
      {
        path: "/products",
        element: <ProductsRoute />,
        loader: async () => {
          let products = await getProducts();

          return json({ products });
        },
      },
      {
        path: "/products/:id",
        element: <ProductRoute />,
        loader: async ({ params }) => {
          let product = await getProductById(params.id);

          return json({ product });
        },
        children: [
          { index: true, element: <ProductDetailsRoute /> },
          { path: "nutrition", element: <ProductNutritionRoute /> },
          { path: "storage", element: <ProductStorageRoute /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
