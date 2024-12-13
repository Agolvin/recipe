
import { Link, useParams } from "react-router-dom";
import { getIngredient } from "./api";
import { useQuery } from "@tanstack/react-query";



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
    cacheTime: 0,
  } as const;

  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["ingredient", id], // Inclure l'ID dans la clé
    queryFn: () => getIngredient(id)//, // Appeler l'API avec l'ID
    //cacheTime: 0, // Optionnel : empêche la mise en cache
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

  return (
    <>
      <h1>Titre:{data.name} id:{id}</h1>
      <p>Description: {data.description}</p>

    </>
  );

}
export default IngredientPage;
 



