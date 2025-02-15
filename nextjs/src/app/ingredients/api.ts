
/*


import {Ingredient} from "@/utils/model";
//import recipeData from '@/utils/bdd.json';
import { getAllIngredients } from "@/actions/ingredientsActions";

//code exporté dans les serverActions

const getUserIngredients = (p_idUser:number) => {
  console.log("debut getUserIngredients");
  let usrIngredient:Ingredient[] = getAllIngredients;   
  console.log("ingredients complet",usrIngredient);
  usrIngredient = usrIngredient.filter(ing => ing.idUser == p_idUser)
  console.log("ingredients filtré",usrIngredient);
  return usrIngredient
};

export default getUserIngredients ;
*/



/*

  const getIngredients = async () => {
    console.log("debut getIngredients");
    try {
  
      const response = await fetch(`${API_BASE_URL}/ingredient/getall`);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data as Ingredient[];
    } catch (err) {
      const error = err as Error;
      throw error;
    }
  };
  

  const getUserIngredients = async (idUser:number) => {
    console.log("debut getUserIngredients");
    try {
      const response = await fetch(`${API_BASE_URL}/ingredient/getbyuser/${idUser}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data as Ingredient[];
    } catch (err) {
      const error = err as Error;
      throw error;
    }
  };


  export { getIngredients,getUserIngredients };
  

*/



