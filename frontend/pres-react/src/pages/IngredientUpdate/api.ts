
import { Ingredient } from "../../../../../shared/models/recipe.model";




const getIngredient = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/ingredient/get/${id}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data as Ingredient;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export { getIngredient };
