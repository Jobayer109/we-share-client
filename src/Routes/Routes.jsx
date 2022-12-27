import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Media from "../Pages/Media";
import Message from "../Pages/Message";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Login from "../Pages/Shared/Login";
import Register from "../Pages/Shared/Register";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "media",
        element: <Media />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
