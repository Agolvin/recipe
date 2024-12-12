
import { Link, Outlet } from "react-router-dom";
import { getIngredients } from "./api";
import { useQuery } from "@tanstack/react-query";
//import { deleteRecipe } from "../Recette/api";
//import { ListeIngredient } from "./utils";



function Ingredients() {
  const RELOAD_QUERY_OPTIONS = {
    cacheTime: 0,
  } as const;

  
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["ingredients"],
    queryFn: getIngredients,
    ...RELOAD_QUERY_OPTIONS,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <div>
        <p>{error.message}</p>
        <button onClick={() => refetch()}>Recharger</button>
      </div>
    );
  }
  if (!data) return;
  return (
    <>

      <Link to="./add">New ingredient</Link>

      <ul>
        {data.map((r) => {
          return (
            <li key={r.id}>
              <Link to={`./${r.id}`}>Titre : {r.name}</Link>{" "}
              <Link to={`./update/${r.id}`}> modifier </Link>
              <button>Delete?? (non codé)</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Ingredients;


// <button onClick={() => deleteIngredient(r.id)}>Delete</button>


//Ancienne version
/*
import { Link, Outlet } from "react-router-dom";
import { tab_ingredients } from "../../data";

function Tab_ingredients() {
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
}

export default Tab_ingredients;
*/



