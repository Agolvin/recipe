


/*
function RecettesPage() {return <p>En construction...</p>};
export default RecettesPage;
  */



import { Link } from "react-router-dom";
import { getUserRecipes } from "./api";
import { useQuery } from "@tanstack/react-query";
import { deleteRecipe } from "../Recette/api";
import { useGlobalContext } from "../../GloblaContext";
import { useRecetteContext } from "../Context/RecetteContext";



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

export default RecettesPage;
  


//<button onClick={getUserRecipesCt}> TEST de context getUserRecipesCt</button>





