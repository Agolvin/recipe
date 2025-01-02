

import { Recipe } from "../../../../shared/front.model";

const API_BASE_URL = 'http://localhost:3000';
//const API_BASE_URL = import.meta.env.BASE_URL;

const getRecipes = async () => {
  console.log("debut getRecipes");
  try {

    const response = await fetch(`${API_BASE_URL}/recette/getall`);

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
    const response = await fetch(`${API_BASE_URL}/recette/getbyuser/${idUser}`);
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
