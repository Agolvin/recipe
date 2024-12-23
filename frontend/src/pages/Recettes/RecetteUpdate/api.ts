/*interface Recipe {
  id: string;
  title: string;
  description: string;
}
*/

import { Recipe } from "../../../../../shared/models/recipe.model";

const getRecipe = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/recette/get/${id}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data as Recipe;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export { getRecipe };
