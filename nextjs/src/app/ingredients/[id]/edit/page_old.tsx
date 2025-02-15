
//import { getIngredient } from "./api";
//import IngredientForm from "@/components/ingredients/IngredientForm";

'use client';

import IngredientForm from "@/components/ingredients/IngredientForm";
import { Ingredient, Units } from "@/utils/model";
import { getIngredientByID } from "@/actions/ingredientsActions";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { saveIngredient } from "@/actions/ingredientsActions";




export default function Home() {




  const param = useParams() // Récupère l'ID depuis l'URL
  const id:number = Number(param.id); // Récupère l'ID depuis l'URL

  console.log("IngredientPage: ID récupéré depuis useParams id   :", id);
  console.log("IngredientPage: ID récupéré depuis useParams param:", param);

  const RELOAD_QUERY_OPTIONS = {
    cacheTime: 0,                 // Supprimer les données immédiatement après le démontage
    staleTime: 0,                 // Considérer les données comme périmées immédiatement
    refetchOnWindowFocus: true,   // Recharger les données si la fenêtre est focalisée
    refetchOnMount: true,         // Force la requête à chaque montage
  } as const;

  if (!id) {
    return <p>Erreur : ID manquant dans l'URL.</p>;
  };



/*



  return (
    <IngredientForm
      defaultValues={processedDefaultsIngredient} 
      fn_ingredient={saveIngredient}
    />
  );


*/





/*
  
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["ingredient", id],
    queryFn: () => getIngredientByID(id),
    ...RELOAD_QUERY_OPTIONS,
  });

*/



  return <p>Soon...</p>;


  /*
  if (isLoading) {
    return <p>Loading...</p>;
  }





  /*
  if (isError) {
    return (
      <div>
        <p>{error.message}</p>
        <button onClick={() => refetch()}>Recharger</button>
      </div>
    );
  }



  if (!data || !data) {
    return <p>Aucune donnée trouvée pour cet ingrédient.</p>;
  }



  const processedDefaultsIngredient: Ingredient = {
    id: data.id || 0,
    idUser: data.idUser || 0,
    unit: data.unit || 'gramme',
    name: data.name || "",
    description: data.description || "",
    price: data.price || 0,
  };




  return (
    <IngredientForm
      defaultValues={processedDefaultsIngredient} 
      fn_ingredient={saveIngredient}
    />
  );



  */
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



