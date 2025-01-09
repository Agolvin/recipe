
import { Ingredient } from "../../../../shared/front.model";



import API_BASE_URL from "../../../../src/utils/config";


const getIngredient = async (id: string):Promise<Ingredient> => {   //typer retour ici
  try {
    const response = await fetch(`${API_BASE_URL}/ingredient/get/${id}`); 

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.log("getIngredient test ")
    const data = await response.json();
    console.log("getIngredient",data)
    return data;// as Ingredient;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export { getIngredient };
