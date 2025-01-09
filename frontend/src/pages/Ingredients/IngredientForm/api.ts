

import { Ingredient } from "../../../../shared/front.model";
import API_BASE_URL from "../../../../src/utils/config";

export const addIngredient = async (newIngredient: Ingredient) => {
  try {
    
    console.log("addIngredient: ", newIngredient);
    const response = await fetch(`${API_BASE_URL}/ingredient/add`, {
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
      `${API_BASE_URL}/ingredient/update/${data.id}`,
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





