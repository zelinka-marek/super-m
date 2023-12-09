import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/error-page";
import "./index.css";
import IndexRoute from "./routes";
import AboutRoute from "./routes/about";
import RootRoute from "./routes/root";

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
