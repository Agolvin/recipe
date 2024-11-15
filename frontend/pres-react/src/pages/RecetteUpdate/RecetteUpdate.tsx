import { QueryOptions, useQuery } from "@tanstack/react-query";
import { UseQueryOptions } from "@tanstack/react-query";
import { getRecipe } from "./api";
import { useParams } from "react-router-dom";
import RecetteForm from "../RecetteForm/RecetteForm";
import { saveRecipe } from "../RecetteForm/api";

function RecetteUpdtate() {
  const { id } = useParams();
  /*
  const QueryOptions = {
    cacheTime: 0, // Spécifier que les données ne sont pas mises en cache
    staleTime: 0, // Marquer les données comme obsolètes immédiatement
    refetchOnMount: "always",
  };

  const COMMON_QUERY_OPTIONS = {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  } as const;*/

  const RELOAD_QUERY_OPTIONS = {
    cacheTime: 0,
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
  return <RecetteForm defaultValues={data} fn={saveRecipe} />;
}

export default RecetteUpdtate;
