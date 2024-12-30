import { useQuery } from "@tanstack/react-query";
//import { QueryOptions, useQuery } from "@tanstack/react-query";
//import { UseQueryOptions } from "@tanstack/react-query";
import { getRecipe } from "./api";
import { useParams } from "react-router-dom";
import RecetteForm from "../RecetteForm/RecetteForm";
import { saveRecipe } from "../RecetteForm/api";

import { Recipe } from "../../../shared/front.model";




function RecetteUpdate() {
  const { id } = useParams();

  const RELOAD_QUERY_OPTIONS = {
    cacheTime: 0, // Supprimer les données immédiatement après le démontage
    staleTime: 0, // Considérer les données comme périmées immédiatement
    refetchOnWindowFocus: true, // Recharger les données si la fenêtre est focalisée
    refetchOnMount: true, // Force la requête à chaque montage
  } as const;

  if (!id) return;
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => getRecipe(id),
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

  const processedDefaultsRecipe: Recipe = {
    id: data.id,
    name: data.name || '',
    description: data.description || '',
    steps: data.steps || [],
    ingredientsQte: data.ingredientsQte || [],
  };

  return <RecetteForm defaultValues={processedDefaultsRecipe} fn_recipe={saveRecipe} />;


}

export default RecetteUpdate;



/*

import { useForm } from "react-hook-form";
import { isRecipe, Recipe } from "../../../../../shared/models/recipe.model";


function RecetteUpdate2() {
  const { id } = useParams();
  const recipeId = id ? Number(id) : null;

  if (recipeId === null) return <p>Invalid ID</p>;

  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => getRecipe(recipeId),
    cacheTime: 0,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <div><p>{error.message}</p><button onClick={() => refetch()}>Recharger</button></div>;
  if (!data) return <p>Pas de recette trouvée.</p>;

  // Assurez-vous que `data` contient toutes les propriétés nécessaires ou fournissez des valeurs par défaut
  const processedDefaults: Recipe = {
    id: data.id,
    name: data.name || '',
    description: data.description || '',
    steps: data.steps || [],
    ingredientsQte: data.ingredientsQte || [],
  };

  return <RecetteForm defaultValues={processedDefaults} fn={saveRecipe} />;
}
*/