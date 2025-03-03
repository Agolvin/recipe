


'use client';


//import { Recipe } from "@/utils/model";


//import getUserRecipes from "@/app/recettes/api"
import { useGlobalContext } from "@/context/globlaContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteRecipeByID, getRecipesUser } from "@/actions/recipesActions";
import { useState } from "react";




export default function Home() {

  const queryClient = useQueryClient();
  const { userID, getUserName } = useGlobalContext();
  //const usrRecipe:Recipe[] = getUserRecipes(userID);
  const [cacheVersion] = useState(0); // Gérer l'état du cache
  //const [cacheVersion, setCacheVersion] = useState(0); // Gérer l'état du cache

  const { data: usrRecipes = [], isLoading, error } = useQuery({
    queryKey: ["recipes", userID, cacheVersion],
    queryFn: () => getRecipesUser(userID),
    enabled: !!userID,
    initialData: () => queryClient.getQueryData(["recipes", userID]) || [],
  });

  
  const deleteMutation = useMutation({
    mutationFn: deleteRecipeByID,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes", userID] });
     // handleUpdate(); // Mettre à jour le cache après suppression
    },
  });

  if (!userID) {
    return <div>Veuillez sélectionner un utilisateur dans la page accueil.</div>;
  }

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur lors du chargement des recettes.</div>;

  return (
   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      

      
      <h1>Liste de recettes de user {getUserName()}</h1>
      <ul>
        {usrRecipes.map((r) => {
            return (
              <li key={r.id}>

                Titre: {r.name} ({r.id})   



                <button
                  onClick={() => deleteMutation.mutate(r.id)}
                  disabled={deleteMutation.isPending}
                  className="bg-red-500 text-white px-3 py-1 rounded disabled:opacity-50"
                  >
                  Delete
                </button>

              </li>
            );
          })}
        </ul>


        </main>
    </div>
  );
}



/*
//import { getUserRecipes } from "./api";
//import { useQuery } from "@tanstack/react-query";


import { RecetteContextType } from "../Context/Types"

import { Link } from "react-router-dom";
import { deleteRecipe } from "../Recette/api";
import { useGlobalContext } from "../../GloblaContext";
import { useRecetteContext } from "../Context/RecetteContext";




function RecettesPage() {

  const recetteCt :RecetteContextType = useRecetteContext();
  //const { recipesCt,isLoadingCt,isErrorCt,errorCt,getUserRecipesCt } = useRecetteContext();
  const { userID,getUserName } = useGlobalContext();


  //recetteCt.getUserRecipesCt();


  if (userID == 0) {
    return <p>Veuiller Sélectionner un utilisateurs sur la page d'accueil.</p>;
  }




  if(recetteCt == undefined) {
    return <p>Context recette non initialisé.</p>;
  }



  if (recetteCt.isLoadingCt) {
    return <p>Loading...</p>;
  }
  if (recetteCt.isErrorCt) {
    return (
      <div>
        <p>{recetteCt.errorCt?.message}</p>
        <button onClick={() => recetteCt.getUserRecipesCt()}>Recharger</button>
      </div>
    );
  }
  if (!recetteCt.recipesCt) return;

console.log("Données recipes retournées par le context: ", recetteCt.recipesCt);


  return (
    <>
      <h1>Liste des recettes de {getUserName()}</h1>
      Fonctionnel incomplet ??<br />
      <Link to="./add">Nouvelle recette(HS) </Link>

      <ul>
        
      {recetteCt.recipesCt.map((r) => {
          return (
            <li key={r.id}>
              <Link to={`./${r.id}`}>Titre : {r.name} id: {r.id}</Link>{" "}
              |<Link to={`./update/${r.id}`}> modifier </Link>
              |<button onClick={() => deleteRecipe(r.id)}>Delete (HS)</button>
            </li>
          );
        })}
      </ul>
      ok lors du clic de rechargement mais pas initialisé avant... <br />
      <button onClick={recetteCt.getUserRecipesCt}> TEST de context getUserRecipesCt</button>

    </>
  );
}

export default RecettesPage;
  




/* Ancienne version sans le context
function RecettesPage() {


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

  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["recipes",userID],
    queryFn: () => getUserRecipes(userID),
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

console.log("Données recipes retournées par l'API: ", data);




const { getUserRecipesCt } = useRecetteContext();

  return (
    <>
      <h1>Liste des recettes de {getUserName()}</h1>
      Fonctionnel incomplet <br />
      <Link to="./add">Nouvelle recette(HS) </Link>

      <ul>
        
      {data.map((r) => {
          return (
            <li key={r.id}>
              <Link to={`./${r.id}`}>Titre : {r.name} id: {r.id}</Link>{" "}
              |<Link to={`./update/${r.id}`}> modifier </Link>
              |<button onClick={() => deleteRecipe(r.id)}>Delete (HS)</button>
            </li>
          );
        })}
      </ul>

      <button onClick={getUserRecipesCt}> TEST de context getUserRecipesCt</button>

    </>
  );
}
*/





