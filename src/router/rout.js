import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
// import Settings from "../pages/Settings";
import ErrorPage from "../pages/ErrorPage";
import Settings from "../pages/Sett";
import Count from "../pages/Count/Count";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/contacts", element: <Contact /> },
      { path: "/settings", element: <Settings /> },
      { path: "/count", element: <Count /> },
    ],
  },
]);
