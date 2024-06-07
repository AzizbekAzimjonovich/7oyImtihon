import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Earphones, Headphones, Home, Speakers, SingleProducts } from "./pages";

function App() {
  const routers = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <SingleProducts />,
        },
        {
          path: "/earphones",
          element: <Earphones />,
        },
        {
          path: "/headphones",
          element: <Headphones />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
