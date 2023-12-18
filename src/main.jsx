import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  json,
  redirect,
} from "react-router-dom";
import {
  addCartItem,
  clearCartItems,
  getCartItems,
  removeCartItem,
} from "./api/cart.js";
import { getProductById, getProducts } from "./api/products.js";
import ErrorPage from "./components/error-page.jsx";
import "./index.css";
import AboutPage from "./routes/about.jsx";
import CartPage from "./routes/cart.jsx";
import HomePage from "./routes/home.jsx";
import ProductDetailsPage from "./routes/product-details.jsx";
import ProductNutritionPage from "./routes/product-nutrition.jsx";
import ProductStoragePage from "./routes/product-storage.jsx";
import ProductPage from "./routes/product.jsx";
import ProductsPage from "./routes/products.jsx";
import Root from "./routes/root.jsx";

const router = createBrowserRouter(
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
        const cart = await getCartItems();

        return json({ cart });
      }}
    >
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route
        path="products"
        element={<ProductsPage />}
        loader={async () => {
          const products = await getProducts();

          return json({ products });
        }}
        action={async ({ request }) => {
          const formData = await request.formData();
          const productId = formData.get("productId");

          const product = await getProductById(Number.parseInt(productId, 10));
          await addCartItem(product);

          return json({ ok: true, product });
        }}
      />
      <Route
        path="products/:id"
        element={<ProductPage />}
        loader={async ({ params }) => {
          const product = await getProductById(Number.parseInt(params.id, 10));

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
          const cart = await getCartItems();

          return json({ cart });
        }}
        action={async ({ request }) => {
          const formData = await request.formData();
          const itemId = formData.get("itemId");

          await removeCartItem(Number.parseInt(itemId, 10));

          return json({ ok: true, itemId });
        }}
      />
      <Route
        path="cart/success"
        loader={async () => {
          await clearCartItems();

          return redirect("/");
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
