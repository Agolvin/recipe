//import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Input/NavBar/NavBar";


import { IngredientProviderTEST } from "./Ingredients/context/IngredientContext";




const Root = () => {
  return (
    <>
    <IngredientProviderTEST>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
      
    </IngredientProviderTEST>
    </>
  );
};

export default Root;
