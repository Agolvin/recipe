
'use client';

import { useGlobalContext } from "@/context/globlaContext";
//import { Ingredient } from "@/utils/model";
import Link from "next/link";
import { getIngredientsUser, deleteIngredientByID } from "@/actions/ingredientsActions";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react"; // Importer useState


export default function Home() {
  const { userID, getUserName } = useGlobalContext();
  const queryClient = useQueryClient();
  const [cacheVersion, setCacheVersion] = useState(0); // Gérer l'état du cache

  const handleUpdate = () => {
    setCacheVersion((prev) => prev + 1); // Incrémenter la version du cache
  };

  const { data: usrIngredients = [], isLoading, error } = useQuery({
    queryKey: ["ingredients", userID, cacheVersion],
    queryFn: () => getIngredientsUser(userID),
    enabled: !!userID,
    initialData: () => queryClient.getQueryData(["ingredients", userID]) || [],
  });

  const deleteMutation = useMutation({
    mutationFn: deleteIngredientByID,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ingredients", userID] });
      handleUpdate(); // Mettre à jour le cache après suppression
    },
  });

  if (!userID) {
    return <div>Veuillez sélectionner un utilisateur dans la page accueil.</div>;
  }

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur lors du chargement des ingrédients.</div>;

  return (
    <div>
      <h1>Liste ingrédients de {getUserName()} ({userID})</h1>
      <ul>
        <br />
        <li>
          <Link href={`/ingredients/new`}>+ Nouvel ingrédient.</Link>
        </li>
        <br />
        {usrIngredients.map((r) => (
          <li key={r.id}>
            <Link href={`/ingredients/${r.id}`}>- {r.name} (id:{r.id}): {r.description} </Link>__
            <Link href={`/ingredients/${r.id}/edit`}>Modif</Link>__
            
            <button
              onClick={() => deleteMutation.mutate(r.id)}
              disabled={deleteMutation.isPending}
              className="bg-red-500 text-white px-3 py-1 rounded disabled:opacity-50"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*



'use client';

import { useGlobalContext } from "@/context/globlaContext";
import { Ingredient } from "@/utils/model";
import Link from "next/link";
import { getIngredientsUser } from "@/actions/ingredientsActions";
//import { startTransition, useEffect, useState, useTransition } from "react";
import { useEffect, useState, useTransition } from "react";

import { deleteIngredientByID } from "@/actions/ingredientsActions";

export default function Home() {

const { userID,getUserName } = useGlobalContext();

const [usrIngredients, setUsrIngredients] = useState<Ingredient[]>([]);


// avec rechargement en fonction de modif de userID
useEffect(() => {
  getIngredientsUser(userID).then((data) => {
    setUsrIngredients(data);
  });
}, [userID]); 


const [isPending, startTransition] = useTransition();

if(!userID)
  return (<div>Veuillez séletionner un utilisateur dans la page accueil.</div>)



  else
  return (
   <div >
    <h1>Liste ingerdients de user {getUserName()} ({userID})</h1>
      <ul>
        <br />
            <li >
                <Link href={`/ingredients/new`}>+ Nouvel ingrédient.</Link>
            </li>
            <br />
            {usrIngredients.map((r) => {
            return (
              <li key={r.id}>
                <Link href={`/ingredients/${r.id}`}>- {r.name}(id:{r.id}): {r.description} </Link>__<Link href={`/ingredients/${r.id}/edit`}>Modif</Link>__
                
                <button
                  onClick={() => startTransition(async() =>{ 
                    await deleteIngredientByID(r.id);
                    setUsrIngredients((prev) => prev.filter((item) => item.id !== r.id));
                  }) }
                  disabled={isPending}
                  className="bg-red-500 text-white px-3 py-1 rounded disabled:opacity-50"
                >Delete</button>
             
              </li>
            );
          })}

      </ul>
  </div>
  );
}





*/




















//<button onClick={() => deleteIngredientByID(r.id)}>Deleteold</button>



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



