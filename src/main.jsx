import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import About from "./routes/about.jsx";
import Discography from "./routes/discography/discography.jsx";
import DetailDiscography from "./routes/discography/detailDiscography.jsx";
import Merchandise from "./routes/merchandise/merchandise.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/discography",
        element: <Discography />,
      },
      {
        path: "/discography/:id",
        element: <DetailDiscography />,
      },
      {
        path: "/merchandise/",
        element: <Merchandise />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
