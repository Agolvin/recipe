

//import { Recipe } from "../../../../shared/front.model";
import API_BASE_URL from "../../../../src/utils/config";
import { Recipe } from "../../../../shared/front.model";


const getRecipes = async () => {
  console.log("debut getRecipes");

  console.log("import.meta.env.VITE_API_BASE_URL",import.meta.env.VITE_API_BASE_URL);
  console.log("API_BASE_URL",API_BASE_URL);


  try {

    //import.meta.env.PROD //booleen
    //import.meta.env.DEV //booleen <> PROD



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
  console.log("import.meta.env.VITE_API_BASE_URL",import.meta.env.VITE_API_BASE_URL);
  console.log("API_BASE_URL",API_BASE_URL);
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
