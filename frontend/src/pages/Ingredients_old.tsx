// import { useState } from "react";
// import Input from "./components/Input/Input";
// import "./App.css";
// import { useForm } from "react-hook-form";
// import { Link, Outlet, useLocation, useParams } from "react-router-dom";
// import Button from "./components/Button/Button";

//import { Link, Outlet } from "react-router-dom";

//import { tab_ingredients } from "../data";

// type formSchema = {
//   email: string;
//   password: string;
// };

function Tab_ingredients() {
  return (
    <ul>
     
            <li>
              Ingredient X
            </li>
            <li>Prix au kg: 17€</li>
          
    </ul>
  );


  /*
  return (
    <ul>
      {tab_ingredients.map((ingredient) => {
        return (
          <>
            <li>
              <Link to={`./${ingredient.id}`}>{ingredient.title}</Link>
            </li>
            <li>Prix au kg: {ingredient.prix}€</li>
          </>
        );
      })}
    </ul>
  );
*/



}

export default Tab_ingredients;
