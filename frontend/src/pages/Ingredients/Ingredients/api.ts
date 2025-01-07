
import {Ingredient} from '../../../../shared/front.model'
import API_BASE_URL from "../../../../src/utils/config";


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
  
/*
  const getIngredient = async (id: number): Promise<Ingredient> => {
    console.log("debut getIngredient api.ts pour id:", id);  
  
    try {
      const response = await fetch(`${API_BASE_URL}/ingredient/get/${id}`, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      console.log("getIngredient data:",data)
      return data as Ingredient;
    } catch (err) {
      const error = err as Error;
      console.error("Erreur dans getIngredient:", error.message);
      throw error;
    }
  
  };
  */


  export { getIngredients,getUserIngredients };
  



  