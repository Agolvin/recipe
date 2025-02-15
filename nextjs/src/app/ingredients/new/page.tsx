
"use client";
import IngredientForm from "@/components/ingredients/IngredientForm";
import { addIngredient } from "@/actions/ingredientsActions";

export default function Home({ params }: { params: { id: string } }) {

 // const param = useParams() // Récupère l'ID depuis l'URL
  //const id:number = Number(param.id); // Récupère l'ID depuis l'URL

  const id:number = 0; // Récupère l'ID depuis l'URL

  //if (!id) return <p>Erreur : ID manquant.</p>;

  return (
  <div>
    add en test<br />
    soon: gestion unités (gr/kg/L...) <br />

    <br />
    <IngredientForm pin_ingredientID={id} fn_ingredient={addIngredient} />
  </div>
  
  );
}



/*
import { addIngredient } from "@/actions/ingredientsActions";

export default function Home() {

  const id = 0;

  return (
   <div >
      Nouvel ingrédient:
    <IngredientForm fn_ingredient={addIngredient} />
  </div>
  );
}
*/














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



