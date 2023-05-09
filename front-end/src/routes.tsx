import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import AllBooks from "./pages/AllBooks";
import HowItWorks from "./pages/HowItWorks";
import Gift from "./pages/Gift";
import RelationshipStatus from "./pages/RelationshipStatus";
import Login from "./pages/Login";
import BookDetailPage from "./pages/BookDetailPage";
import NewBooks from "./pages/NewBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/the-best-new-books", element: <NewBooks /> },
      { path: "/all-books", element: <AllBooks /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      { path: "/gift", element: <Gift /> },
      { path: "/relationship-status", element: <RelationshipStatus /> },
      { path: "/login", element: <Login /> },
      { path: "/all-books/:slug", element: <BookDetailPage /> },
    ],
  },
]);

export default router;
