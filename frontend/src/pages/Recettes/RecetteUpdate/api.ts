
//import { Recipe } from "shared/front.model";


//import { Recipe } from "../../../../shared/front.model";
//import Recipe from "../../../../shared/front.model"


import { Ingredient } from "../../../../shared/front.model";

import API_BASE_URL from "../../../../src/utils/config";

const getRecipe = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recette/get/${id}`);

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
