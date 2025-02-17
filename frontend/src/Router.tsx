import { createBrowserRouter, Outlet } from "react-router-dom";
import Root from "./pages/Root";
import Page_test from "./pages/Page_test";
import App from "./App";
//import RecetteUpdate from "./pages/Recettes/RecetteUpdate/RecetteUpdate";
import AccueilPage from "./pages/Accueil/Accueil";
import ToolsPage from "./pages/Tools/Tools";
import RecettesPage from "./pages/Recettes/Recettes/Recettes";
import RecettePage from "./pages/Recettes/Recette/Recette";
import RecetteForm from "./pages/Recettes/RecetteForm/RecetteForm";
import { addRecipe, saveRecipe } from "./pages/Recettes/RecetteForm/api";
import IngredientsPage from "./pages/Ingredients/Ingredients/Ingredients";
import IngredientPage from "./pages/Ingredients/Ingredient/Ingredient";
import IngredientForm from "./pages/Ingredients/IngredientForm/IngredientForm";
//import { addIngredient, saveIngredient } from "./pages/Ingredients/IngredientForm/api";
import { addIngredient } from "./pages/Ingredients/IngredientForm/api";
import IngredientUpdate from "./pages/Ingredients/IngredientUpdate/IngredientUpdate";
import {IngredientProvider} from "./pages/Ingredients/context/IngredientContext"
//import { RouteObject } from 'react-router-dom';

//import  { Ingredient } from "@shared";
//import { Ingredient } from "@pages";


//revoir le typage du rooter! 
const router: any = createBrowserRouter([
  {
    path: "dashboard",
    element: <p>admin</p>,
  },
  {
    path: "/",
    element: <Root />,
    children: [

      {
        path: "/accueil",
        element: <AccueilPage />,
      },

      {
        path: "/tools",
        element: <ToolsPage />,
      },


      //provider spécifique ingrédients pour contexte spécifique
      {
        path: "/ingredients",
        element: (
          <IngredientProvider>
            <Outlet />
          </IngredientProvider>
        ),
        children: [
          {
            index: true,              // "/ingredients"
            element: <IngredientsPage />,
          },
          {
            path: ":id",              // "/ingredients/:id"
            element: <IngredientPage />,
          },
          
          {
            path: "update/:id",       // "/ingredients/update/:id"
            element: <IngredientUpdate />,
          },

  /*
          {
            path: "update/:id",              // "/ingredients/add"
            element: <IngredientForm fn_ingredient={saveIngredient} defaultValues={undefined} />,
          },
*/

          {
            path: "add",              // "/ingredients/add"
            element: <IngredientForm fn_ingredient={addIngredient} defaultValues={undefined} />,
          },
        ],
      },



      //provider spécifique recttes pour contexte spécifique
      {
        path: "/recettes",
        element: (
          //<RecetteProviderTEST>
            <Outlet />
          //</RecetteProviderTEST>
        ),
        children: [
          {
            index: true,              // "/recettes"
            element: <RecettesPage />,
          },
          {
            path: ":id",              // "/recettes/:id"
            element: <RecettePage />,
          },
/*
          {
            path: "update/:id",       // "/recettes/update/:id"
            element: <RecetteUpdate />,
          },
*/
          {
            path: "update/:id",       // "/recettes/update/:id"
            element: <RecetteForm fn_recipe={saveRecipe} defaultValues={undefined} />,
          },

          {
            path: "add",              // "/recettes/add"
            element: <RecetteForm fn_recipe={addRecipe} defaultValues={undefined} />,
          },
        ],
      },



      {
        path: "/dashboard",
        element: <Page_test />,
      },

      {
        path: "/2",
        element: <App />,
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
