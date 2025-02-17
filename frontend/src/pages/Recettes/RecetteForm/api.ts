//import { Recipe } from "../../../../../shared/models/recipe.model";
//import { FormSchema } from "./RecetteForm";

import { Recipe } from "../../../../shared/front.model";
import API_BASE_URL from "../../../../src/utils/config";


export const addRecipe = async (newRecipe: Recipe) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recette/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipe: newRecipe }), // Enveloppez les données dans un objet `recipe`
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};



/*
export const saveRecipe = async (Recipe: {
  id: string;
  description: string;
  title: string;
}) => {
*/

export const saveRecipe = async (data: Recipe): Promise<void> => {

  try {

    const response = await fetch(
      `${API_BASE_URL}/recette/update/${data.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }), // Enveloppez les données dans un objet `recipe`
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};
