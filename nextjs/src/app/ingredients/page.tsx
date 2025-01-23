


import { Ingredient } from "@/utils/model";
import getUserIngredients from "@/app/ingredients/api"
import Link from "next/link";
//import { addIngredient } from "../api/ingredients/api";



const usrIngredient:Ingredient[] = getUserIngredients(1);


/*

const IngTEST:Ingredient = {
  id: 123456,
  idUser: 1,
  name: "test ajout",
  price: 123,
  unit: "gram",
  description: "test d'ajout"
};


*/

export default function Home() {






  return (
   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      

      
      <h1>Liste de ingerdients de user 1.</h1>


      <ul>
        {usrIngredient.map((r) => {
            return (
              <li key={r.id}>
                <Link href={`/ingredients/${r.id}`}>{r.name}(id:{r.id}): {r.description} </Link>
              </li>
            );
          })}

      </ul>
    </main>
  </div>
  );
}















/*



          <li><button onClick={() => addIngredient(IngTEST)}>test ajout</button></li>

import { Link } from "react-router-dom";
//import { getIngredients } from "./api";
import { getUserIngredients } from "./api";
import { useQuery } from "@tanstack/react-query";

import { useGlobalContext } from "../../GloblaContext";


//import { deleteRecipe } from "../Recette/api";
//import { ListeIngredient } from "./utils";



function IngredientsPage() {



  const { userID,getUserName } = useGlobalContext();
  if (userID == 0) {
    return <p>Veuiller Sélectionner un utilisateurs sur la page d'accueil.</p>;
  }


  const RELOAD_QUERY_OPTIONS = {
    cacheTime: 0, // Supprimer les données immédiatement après le démontage
    staleTime: 0, // Considérer les données comme périmées immédiatement
    refetchOnWindowFocus: true, // Recharger les données si la fenêtre est focalisée
    refetchOnMount: true, // Force la requête à chaque montage
  } as const;



/*
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["ingredients"],
    queryFn: getIngredients,
    ...RELOAD_QUERY_OPTIONS,
  });
*/


/*
const { isLoading, data, isError, error, refetch } = useQuery({
  queryKey: ["ingredients",userID],
  queryFn: () => getUserIngredients(userID),
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




      <h1>Liste des ingrédients de {getUserName()}</h1>
      Fonctionnel <br />
      ajout par user ok <br />
      bug à la modif: supprime user du json: corrigé? <br />


      <Link to="./add">New ingredient</Link>

      <ul>
        {data.map((r) => {
          return (
            <li key={r.id}>
              <Link to={`./${r.id}`}>Titre : {r.name}</Link>{" "}
              |<Link to={`./update/${r.id}`}> modifier </Link>
              |<button>Delete?? (non codé)</button>
            </li>
          );
        })}
      </ul>






     
    </>
  );
}

export default IngredientsPage;



/*



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



