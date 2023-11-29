import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import NewUser from "./components/NewUser.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("https://identityhub-api.onrender.com/users"),
  },
  {
    path: "/newUser",
    element: <NewUser />,
  },
  {
    path: "/updateUser/:id",
    element: <UpdateUser />,
    loader: ({ params }) =>
      fetch(`https://identityhub-api.onrender.com/users/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
