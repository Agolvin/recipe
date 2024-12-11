import { queryClient } from "../../providers/QueryClientProvider";



import {Recipe} from '../../../../../shared/models/recipe.model'





export const getRecipe = async (id: number) => {
  console.log("debut getRecipe api.ts");  

  try {


    //queryClient.setQueryData(["recipes"], updatedData);

    const response = await fetch(`http://localhost:3000/recette/get/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(getRecipe,data)
    return data as Recipe;
  } catch (err) {
    const error = err as Error;
    throw error;
  }


};







export const deleteRecipe = async (id: number) => {
  console.log("debut deleteRecipe");

  const prevData = queryClient.getQueryData(["recipes"]) as Recipe[];

  try {
    //optimistic update = update des données locales avant reponse du back
    const updatedData = prevData.filter((recipe) => recipe.id !== id);
    queryClient.setQueryData(["recipes"], updatedData);

    const response = await fetch(`http://localhost:3000/recette/delete/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data as Recipe;
  } catch (err) {
    queryClient.setQueryData(["recipes"], prevData);
    const error = err as Error;
    throw error;
  }
};
