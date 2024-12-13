import { queryClient } from "../../providers/QueryClientProvider";



import {Ingredient} from '../../../../../shared/models/recipe.model'





const getIngredient = async (id: number): Promise<Ingredient> => {
  console.log("debut getIngredient api.ts pour id:", id);  
  console.log("type de id: ", typeof id)

  try {
    const response = await fetch(`http://localhost:3000/ingredient/get/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("getIngredient data:",data)
    return data as Ingredient;
  } catch (err) {
    const error = err as Error;
    console.error("Erreur dans getIngredient:", error.message);
    throw error;
  }

};


export { getIngredient };