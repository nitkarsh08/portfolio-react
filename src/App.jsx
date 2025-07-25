import Home from "./pages/home/home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
