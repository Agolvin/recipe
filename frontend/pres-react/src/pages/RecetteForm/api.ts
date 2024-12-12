//import { Recipe } from "../../../../../shared/models/recipe.model";
//import { FormSchema } from "./RecetteForm";

import { Recipe } from "../../../../../shared/models/recipe.model";




export const addRecipe = async (newRecipe: Recipe) => {
  try {
    // const response = await fetch("http://localhost:3000/recette/addRecipe");

    const response = await fetch("http://localhost:3000/recette/addRecipe", {
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




export const saveRecipe = async (data: Recipe): Promise<void> => {
/*
export const saveRecipe = async (Recipe: {
  id: string;
  description: string;
  title: string;
}) => {

  */
  try {
    // const response = await fetch("http://localhost:3000/recette/addRecipe");

    const response = await fetch(
      `http://localhost:3000/recette/update/${data.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipe: data }), // Enveloppez les données dans un objet `recipe`
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
