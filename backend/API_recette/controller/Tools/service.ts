

import { Ingredient, isIngredient, isRecipe } from "../../../../shared/models/recipe.model";
import { getBDD, saveBDD } from "../../lib/utils";




export const testToolsSv = async () => {
    console.log("testToolsSv");

/*
  console.log("updateIngredientSv", pinIngredient);
  let bdd = getBDD();
  if (!bdd.ingredients) {
    throw new Error("Données ingrédients inexistantes en base");
  }
  if (!bdd.recipes) {
    throw new Error("Données recettes inexistantes en base");
  }
  
  console.log("updateIngredientSv base OK");
  console.log("updateIngredientSv pinIngredient.id: ",pinIngredient.id);

  let index = bdd.ingredients.findIndex(
    (ingredient) => ingredient.id == pinIngredient.id
  );
  
  console.log("updateIngredientSv index: ",index);

  if (index == -1) {
    throw new Error("Ingrdient inexistant");
  }

  bdd.ingredients[index] = pinIngredient



  saveBDD(bdd);
  return pinIngredient

  */
};




export const migrationToolsSv = async () => {


  console.log("migrationToolsSv");

    let bdd = getBDD();




};