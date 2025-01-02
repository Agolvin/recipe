// import { useState } from "react";
// import Input from "./components/Input/Input";
// import "./App.css";
// import { useForm } from "react-hook-form";
// import { Link, Outlet, useLocation, useParams } from "react-router-dom";
// import Button from "./components/Button/Button";

//import { Link, Outlet, useParams } from "react-router-dom";
//import { recette } from "../../data";

//import { ListeRecipe } from "./utils";
//import { tab_ingredients } from "../../data";

// type formSchema = {
//   email: string;
//   password: string;
// };

//import { Recipe,isRecipe,Units,UnitEnum, Ingredient, Step,IngredientQte } from "../../../shared/front.model";
import { Units,Step,IngredientQte } from "../../../../shared/front.model";


//import { Link, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";

import { getRecipe } from "./api";
import { useQuery } from "@tanstack/react-query";

function RecettePage(){//{ id }: { id: number }) {
  


  const { id: idParam } = useParams(); // Récupère l'id depuis l'URL
  const id = Number(idParam); // Convertir en nombre


  if (isNaN(id)) {
    return <p>ID invalide dans l'URL.</p>;
  }

  
  console.log("Id récupéré depuis l'URL:", id);

  console.log("fonction recette id:", id);
/*
  const RELOAD_QUERY_OPTIONS = {
    cacheTime: 0, // Supprimer les données immédiatement après le démontage
    staleTime: 0, // Considérer les données comme périmées immédiatement
    refetchOnWindowFocus: true, // Recharger les données si la fenêtre est focalisée
    refetchOnMount: true, // Force la requête à chaque montage
  } as const;
*/


  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["recipe", id], // Inclure l'ID dans la clé
    queryFn: () => getRecipe(id)//, // Appeler l'API avec l'ID
    //cacheTime: 0, // Optionnel : empêche la mise en cache
  });


/*
  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["recipe", id], 
    queryFn: ({ queryKey }) => {
      const [, recipeId] = queryKey; 
      return getRecipe(recipeId as number);
    }
    //,cacheTime: 0, // Supprime le cache si nécessaire
  });
*/





  if (isLoading) {
    return <p>Loading...</p>;
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


      <h1>Détail de la rectte (id: {id})</h1>
      <h2>Titre:{data.name}</h2>
      <p>Description: {data.description}</p>




      {data.ingredientsQte && data.ingredientsQte.length > 0 && (
      <div>
        <h1>Ingrédients :</h1>
        <ol>
          {data.ingredientsQte.map((ingr:IngredientQte, index:any) => (
            <li key={index}>
              <h3>Ingrédient {index + 1}:</h3>
              <p>{ingr.ingredient.name}: {ingr.quantity} {Units[ingr.ingredient.unit].symbol}</p>
            </li>
          ))}
        </ol>
      </div>)}




      {data.steps && data.steps.length > 0 && (
      <div>
        <h1>Étapes :</h1>
        <ol>
          {data.steps.map((step:Step, index:any) => (
            <li key={index}>
              <h3>Étape {index + 1}: {step.name}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>)}



    </>
  );

}
export default RecettePage;
 








/*

  console.log("fonction recette");
  const { id } = useParams();
  
  if (!id) return;

  const curr_recette = recette.find((recette) => recette.id === id);
  if (!curr_recette) return;

  console.log(id);

  return (
    <>
      <h1>{curr_recette.title}</h1>
      <p>{curr_recette.description}</p>

      <h1>Ingrédients:</h1>
      <ul>
        {curr_recette.ingredients.map((ingredient_bis) => {
          const curr_ingredient = tab_ingredients.find(
            (tab_ingredients) => tab_ingredients.id === ingredient_bis
          );

          if (!curr_ingredient) return;

          return (
            <li>
              <Link to={`/ingredients/${curr_ingredient.id}`}>
                {curr_ingredient.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <h1>Etapes:</h1>
      <div>
        {curr_recette.etapes.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  );


*/






















  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   setError,
  // } = useForm<formSchema>();
  // const onSubmit = (data: formSchema) => {
  //   // fetch des donnees
  //   setError("root", {
  //     message: "vous avez oublie un champ",
  //   });
  // };
  // const { id } = useParams();
  // console.log(id);
  // const { pathname } = useLocation();
  // const href = pathname === "/2" ? "./conf" : "/2";
  // return (
  //   <form
  //     style={{ display: "flex", flexDirection: "column" }}
  //     onSubmit={handleSubmit(onSubmit)}
  //   >
  //     <Input label="email" />
  //     <label>
  //       email
  //       <input
  //         type="text"
  //         {...register("email", {
  //           required: {
  //             value: true,
  //             message: "vous devez entrer un email",
  //           },
  //           pattern: {
  //             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //             message: "Votre email n'est pas valide",
  //           },
  //         })}
  //       />
  //       {errors.email && <p>{errors.email.message}</p>}
  //     </label>
  //     <label>
  //       mot de passe
  //       <input
  //         type="password"
  //         {...register("password", {
  //           required: {
  //             value: true,
  //             message: "vous devez entrer un mot de passe",
  //           },
  //           pattern: {
  //             value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{12,}$/,
  //             message:
  //               "Votre mot de passe doit contenir au moins 8 caractères, une lettre et un chiffre",
  //           },
  //         })}
  //       />
  //       {errors.password && <p>{errors.password.message}</p>}
  //     </label>
  //     <p className="text-4xl text-red-500">test style class</p>
  //     <button type="submit">Se connecter</button>
  //     {errors.root && <p>{errors.root.message}</p>}
  //     <Link to={href}>confirmer le mdp</Link>
  //     <Button>Tests</Button>
  //     <Outlet />
  //   </form>
  // );
//}

//export default Recette;
