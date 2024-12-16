import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Page_test from "./pages/Page_test";
import App from "./App";
//import Tab_ingredients from "./pages/Ingredients";
// import RecetteForm, { FormSchema } from "./pages/RecetteForm/RecetteForm";
import RecetteUpdate from "./pages/RecetteUpdate/RecetteUpdate";
import AccueilPage from "./pages/Accueil/Accueil";
import ToolsPage from "./pages/Tools/Tools";


//import Recettes from "./pages/Recettes/Recettes";
import RecettesPage from "./pages/Recettes/Recettes";
import RecettePage from "./pages/Recette/Recette";
//import { Recette } from "@pages";
import RecetteForm from "./pages/RecetteForm/RecetteForm";
import { addRecipe } from "./pages/RecetteForm/api";



import IngredientsPage from "./pages/Ingredients/Ingredients";
import IngredientPage from "./pages/Ingredient/Ingredient";
//import { Ingredient } from "@pages";
//import Ingredient  from "./pages/Ingredient/Ingredient";
import IngredientForm from "./pages/IngredientForm/IngredientForm";
import { addIngredient,saveIngredient } from "./pages/IngredientForm/api";
import IngredientUpdate from "./pages/IngredientUpdate/IngredientUpdate";

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
        path: "/accueil",
        element: <AccueilPage />,
      },









      {
        path: "/ingredients",
        element: <IngredientsPage />,
      },

      {
        path: "/ingredients/:id",
        element: <IngredientPage />,
      },
     
      {
        path: "/ingredients/update/:id",
        element: <IngredientUpdate />,
      }, 

      {
        path: "/ingredients/add",
        element: <IngredientForm fn_ingredient={addIngredient} defaultValues={undefined} />,
      },
    


      


      {
        path: "/recettes",
        element: <RecettesPage />,
      },

      {
        path: "/recettes/:id",
        element: <RecettePage />,
      },

      {
        path: "/recettes/add",
        element: <RecetteForm fn_recipe={addRecipe} defaultValues={undefined} />,
      },

      {
        path: "/recettes/update/:id",
        element: <RecetteUpdate />,
      },







      {
        path: "/tools",
        element: <ToolsPage />,
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
