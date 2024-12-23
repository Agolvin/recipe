

import { Recipe } from "../../../../../shared/models/recipe.model";

const getRecipes = async () => {
  console.log("debut getRecipes");
  try {

    const response = await fetch("http://localhost:3000/recette/getall");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    
    return data as Recipe[];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};

export { getRecipes };
