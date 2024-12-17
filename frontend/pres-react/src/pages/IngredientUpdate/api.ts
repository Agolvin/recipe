
import { Ingredient } from "../../../../../shared/models/recipe.model";




const getIngredient = async (id: string):Promise<Ingredient> => {   //typer retour ici
  try {
    const response = await fetch(`http://localhost:3000/ingredient/get/${id}`); //a virer partout le localhost
    //const response = await fetch(`/ingredient/get/${id}`);

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
