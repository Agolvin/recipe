import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Page_test from "./pages/Page_test";
import App from "./App";
import Recettes from "./pages/Recettes/Recettes";
import { Recette } from "@pages";
//import Tab_ingredients from "./pages/Ingredients";
import Ingredient from "./pages/Ingredient";
// import RecetteForm, { FormSchema } from "./pages/RecetteForm/RecetteForm";
import RecetteForm from "./pages/RecetteForm/RecetteForm";
import { addRecipe } from "./pages/RecetteForm/api";
import RecetteUpdate from "./pages/RecetteUpdate/RecetteUpdate";
import Accueil from "./pages/Accueil/Accueil";
import Ingredients from "./pages/Ingredients/ingredients";

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
        path: "/accueil",
        element: <Accueil />,
      },

      {
        path: "/recettes/add",
        element: <RecetteForm fn={addRecipe} defaultValues={undefined} />,
      },

      {
        path: "/recettes/update/:id",
        element: <RecetteUpdate />,
      },

      {
        path: "/recettes/:id",
        element: <Recette />,
      },

      {
        path: "/ingredients",
        element: <Ingredients />,
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
