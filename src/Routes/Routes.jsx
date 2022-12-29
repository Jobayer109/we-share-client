import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import About from "../Pages/Home/About";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Home/Media";
import MediaCardDetails from "../Pages/Home/MediaCardDetails";
import Message from "../Pages/Home/Message";
import ErrorPage from "../Pages/Shared/ErrorPage";

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
        path: "post/:id",
        element: <MediaCardDetails />,
        loader: ({ params }) => fetch(`https://we-share-server.vercel.app/post/${params.id}`),
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
