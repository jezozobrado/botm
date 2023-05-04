import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import MonthlyBooks from "./components/MonthlyBooks";
import AllBooks from "./components/AllBooks";
import HowItWorks from "./components/HowItWorks";
import Gift from "./components/Gift";
import RelationshipStatus from "./components/RelationshipStatus";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/the-best-new-books", element: <MonthlyBooks /> },
      { path: "/all-books", element: <AllBooks /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      { path: "/gift", element: <Gift /> },
      { path: "/relationship-status", element: <RelationshipStatus /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
