//import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Input/NavBar/NavBar";


import { IngredientProvider } from "./Ingredients/context/IngredientContext";
import { RecetteProvider } from "./Recettes/Context/RecetteContext";
import { GlobalProvider } from "./GloblaContext";
//import { Recipe } from "../../shared/front.model";

//import RecetteProvider from "./Recettes/Context/RecetteContext";
//
//<RecetteProvider>
//</RecetteProvider>

const Root = () => {
  return (
    <>
      <GlobalProvider>
        
      <RecetteProvider>
      <IngredientProvider>
            <NavBar />
            <main>
              <Outlet />
            </main>
            <footer></footer>
            </IngredientProvider>
            </RecetteProvider>

      </GlobalProvider>
    </>
  );
};

export default Root;
