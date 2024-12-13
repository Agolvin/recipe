

import { Ingredient } from "../../../../../shared/models/recipe.model";


export const addIngredient = async (newIngredient: Ingredient) => {
  try {
    const response = await fetch("http://localhost:3000/ingredient/addIngredient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredient: newIngredient }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};


