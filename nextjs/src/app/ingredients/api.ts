
import {Ingredient} from "@/utils/model";
import recipeData from '@/utils/bdd.json';



//ne filtre pas!!!!!

const getUserIngredients = (p_idUser:number) => {//remettre async???
  console.log("debut getUserIngredients");
  let usrIngredient:Ingredient[] = recipeData.ingredients;   //A faire remettre le unit(string) en unitEnum 
  console.log("ingredients complet",usrIngredient);
  usrIngredient = usrIngredient.filter(ing => ing.idUser == p_idUser)
  console.log("ingredients filtré",usrIngredient);
  return usrIngredient
};

export default getUserIngredients ;




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



