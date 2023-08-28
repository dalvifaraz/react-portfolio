import React from "react";
import { Header, Footer } from "./component/layout";
import { Home, About, Blog, Contact, ErrorPage } from "./component/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routers = createBrowserRouter([
    {
      element: <><Header headerName="Header" /><Footer footerName="footer"/></>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/about",
          element: <About />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/blog",
          element: <Blog />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={routers} />
    </React.Fragment>
  );
}

export default App;
