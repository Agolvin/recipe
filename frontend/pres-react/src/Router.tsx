import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Page_test from "./pages/Page_test";
import App from "./App";
import Recettes from "./pages/Recettes/Recettes";
import { Recette } from "@pages";
import Tab_ingredients from "./pages/Ingredient/ingredients";
import Ingredient from "./pages/Ingredient";
import RecetteForm, { FormSchema } from "./pages/RecetteForm/RecetteForm";
import { addRecipe, saveRecipe } from "./pages/RecetteForm/api";
import RecetteUpdtate from "./pages/RecetteUpdate/RecetteUpdate";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <p>admin</p>,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Page_test />,
      },

      {
        path: "/2",
        element: <App />,
      },

      {
        path: "/recettes",
        element: <Recettes />,
      },

      {
        path: "/recettes/add",
        element: <RecetteForm fn={addRecipe} defaultValues={undefined} />,
      },

      {
        path: "/recettes/update/:id",
        element: <RecetteUpdtate />,
      },

      {
        path: "/recettes/:id",
        element: <Recette />,
      },

      {
        path: "/ingredients",
        element: <Tab_ingredients />,
      },

      {
        path: "/ingredients/:id",
        element: <Ingredient />,
      },

      {
        path: "/2/:id",
        element: <App />,
        children: [
          {
            path: "conf",
            element: <input placeholder="confirmez le mdp" />,
          },
        ],
      },
    ],
  },
]);
export default router;
