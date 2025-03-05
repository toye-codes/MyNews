import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Marketing from "./Pages/Marketing";
import Entertainment from "./Pages/Entertainment";
import Sports from "./Pages/Sports"


// Define routes
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/marketing", element: <Marketing /> },
  {path:"/entertainment", element: <Entertainment />},
  {path: "sports", element: <Sports />}
]);

// Render the application with RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
