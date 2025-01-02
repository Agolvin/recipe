

import { Recipe } from "../../../../shared/front.model";

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

const getUserRecipes = async (idUser:number) => {
  console.log("debut getUserRecipes");
  try {
    const response = await fetch(`http://localhost:3000/recette/getbyuser/${idUser}`);
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

export { getRecipes,getUserRecipes };
