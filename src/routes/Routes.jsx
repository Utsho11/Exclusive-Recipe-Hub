import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/About us/AboutUs";
import ErrorPage from "../Pages/Error/ErrorPage";
import NewsDetails from "../Pages/Sections/News&Articles/NewsDetails/NewsDetails";
import RecipeForm from "../Pages/Sections/PublishRecipe/RecipeForm/RecipeForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://exclusive-recipe-hub-server-fnbgdwo75-utsho11.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "/news/:id",
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(
            `https://exclusive-recipe-hub-server-fnbgdwo75-utsho11.vercel.app/news/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/publish",
        element: <RecipeForm></RecipeForm>,
      },
    ],
  },
]);

export default router;
