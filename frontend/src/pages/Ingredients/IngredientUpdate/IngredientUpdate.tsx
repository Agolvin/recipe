import { useQuery } from "@tanstack/react-query";
import { getIngredient } from "./api";
import { useParams } from "react-router-dom";
import IngredientForm from "../IngredientForm/IngredientForm";

import { Ingredient, Units } from "../../../../shared/front.model";
import { saveIngredient } from "../IngredientForm/api";



function IngredientUpdate() {
  const { id } = useParams();

  const RELOAD_QUERY_OPTIONS = {
    cacheTime: 0,                 // Supprimer les données immédiatement après le démontage
    staleTime: 0,                 // Considérer les données comme périmées immédiatement
    refetchOnWindowFocus: true,   // Recharger les données si la fenêtre est focalisée
    refetchOnMount: true,         // Force la requête à chaque montage
  } as const;


  if (!id) {
    return <p>Erreur : ID manquant dans l'URL.</p>;
  };
  
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["ingredient", id],
    queryFn: () => getIngredient(id),
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

  if (!data) {
    return <p>Aucune donnée trouvée pour cet ingrédient.</p>;
  }

  const processedDefaultsIngredient: Ingredient = {
    id: data.id,
    unit: data.unit || Units.GRAM,
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

}

export default IngredientUpdate;

