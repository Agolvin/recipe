
import {Ingredient} from '../../../shared/front.model'

  const getIngredients = async () => {
    console.log("debut getIngredients");
    try {
  
      const response = await fetch("http://localhost:3000/ingredient/getall");
  
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
  
  export { getIngredients };
  