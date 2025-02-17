
import { useParams } from "react-router-dom";
import { getIngredient } from "./api";
import { useQuery } from "@tanstack/react-query";
import { Units } from "../../../../shared/front.model";


import { useIngredientContext } from "../context/IngredientContext";


//import { useIngredientContext } from "../context/IngredientContext";



/*
const SomeComponent: React.FC = () => { const { ingredient_test, cpt } = useIngredientContext();
*/




function IngredientPage(){

  console.log("composant Ingredient()", );

  const { id: idParam } = useParams(); 
  const id = Number(idParam); 


  if (isNaN(id)) {
    return <p>ID invalide dans l'URL.</p>;
  }

  console.log("Id récupéré depuis l'URL:", id);
  console.log("fonction recette id:", id);

  const RELOAD_QUERY_OPTIONS = {
    cacheTime: 0, // Supprimer les données immédiatement après le démontage
    staleTime: 0, // Considérer les données comme périmées immédiatement
    refetchOnWindowFocus: true, // Recharger les données si la fenêtre est focalisée
    refetchOnMount: true, // Force la requête à chaque montage
  } as const;

  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["ingredient", id], // Inclure l'ID dans la clé
    queryFn: () => getIngredient(id),//, // Appeler l'API avec l'ID
    ...RELOAD_QUERY_OPTIONS,
  });


  if (isLoading) {
    return <p>Loading ingredient {id}...</p>;
  }
  if (isError) {
    return (
      <div>
        <p>{(error as Error).message}</p>
        <button onClick={() => refetch()}>Recharger</button>
      </div>
    );
  }
  if (!data) {
    return <p>Pas de données disponibles</p>;
  }
console.log("Données recipes retournées par l'API: ", data);

  const { cpt, incrementCpt } = useIngredientContext();
  return (
    <>
      <h1>Détail de l'ingrédient (id: {id})</h1>
      <h2>Titre:{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>Prix: {data.price}</p>
      <p>Unité: {Units[data.unit].name} ({Units[data.unit].symbol})</p>
      
      <button onClick={incrementCpt}>Btn test context cpt: {cpt}</button>
    </>
  );

}
export default IngredientPage;
