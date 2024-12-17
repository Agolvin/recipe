

import { Ingredient } from "../../../../../../shared/models/recipe.model";


export const addIngredient = async (newIngredient: Ingredient) => {
  try {
    
    console.log("addIngredient: ", newIngredient);
    const response = await fetch("http://localhost:3000/ingredient/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify({ ingredient: newIngredient }),
      body: JSON.stringify(newIngredient),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};




export const saveIngredient = async (data: Ingredient): Promise<void> => {
  console.log(saveIngredient, data);
  try {
    const response = await fetch(
      `http://localhost:3000/ingredient/update/${data.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }), 
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





