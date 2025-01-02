//import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Input/NavBar/NavBar";


import { IngredientProviderTEST } from "./Ingredients/context/IngredientContext";
import { GlobalProvider } from "./GloblaContext";


const Root = () => {
  return (
    <>
      <GlobalProvider>
        <IngredientProviderTEST>
          <NavBar />
          <main>
            <Outlet />
          </main>
          <footer></footer>
        </IngredientProviderTEST>
      </GlobalProvider>
    </>
  );
};

export default Root;
