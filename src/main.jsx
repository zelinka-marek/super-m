import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  json,
} from "react-router-dom";
import { addCartItem, getCartItems, removeCartItem } from "./api/cart";
import { getProductById, getProducts } from "./api/products";
import ErrorPage from "./components/error-page";
import "./index.css";
import IndexPage from "./routes";
import AboutPage from "./routes/about";
import CartPage from "./routes/cart";
import ProductPage from "./routes/product";
import ProductDetailsPage from "./routes/product-details";
import ProductNutritionPage from "./routes/product-nutrition";
import ProductStoragePage from "./routes/product-storage";
import ProductsPage from "./routes/products";
import Root from "./routes/root";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={
        <div className="flex h-full items-center justify-center bg-gray-100">
          <ErrorPage />
        </div>
      }
      loader={async () => {
        let cart = await getCartItems();

        return json({ cart });
      }}
    >
      <Route index element={<IndexPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route
        path="products"
        element={<ProductsPage />}
        loader={async () => {
          let products = await getProducts();

          return json({ products });
        }}
        action={async ({ request }) => {
          let formData = await request.formData();
          let productId = formData.get("productId");

          let product = await getProductById(Number.parseInt(productId, 10));
          await addCartItem(product);

          return json({ ok: true, product });
        }}
      />
      <Route
        path="products/:id"
        element={<ProductPage />}
        loader={async ({ params }) => {
          let product = await getProductById(Number.parseInt(params.id, 10));

          return json({ product });
        }}
      >
        <Route index element={<ProductDetailsPage />} />
        <Route path="nutrition" element={<ProductNutritionPage />} />
        <Route path="storage" element={<ProductStoragePage />} />
      </Route>
      <Route
        path="cart"
        element={<CartPage />}
        loader={async () => {
          let cart = await getCartItems();

          return json({ cart });
        }}
        action={async ({ request }) => {
          let formData = await request.formData();
          let itemId = formData.get("itemId");

          await removeCartItem(Number.parseInt(itemId, 10));

          return json({ ok: true, itemId });
        }}
      />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
