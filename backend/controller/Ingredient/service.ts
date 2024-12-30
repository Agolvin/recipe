

import { Ingredient, isIngredient, isRecipe } from "../../../shared/models/recipe.model";
import { getBDD, saveBDD } from "../../lib/utils";


export const getAllIngredientsSv = async () => {
  console.log("getAllIngredientsSv");
  let bdd = getBDD();

  if (!bdd.ingredients) {
    console.log("getAllIngredientsSv Données ingrédients inexistantes en base");
    throw new Error("getAllIngredientsSv Données ingrédients inexistantes en base");
  }
  /*
  if (!bdd.ingredients.every(isIngredient)) {
    console.log("getAllIngredientsSv Type de données ingrédients incohérent entre la base et la description");
    throw new Error("getAllIngredientsSv Type de données ingrédients incohérent entre la base et la description");
  }
  */
  return bdd.ingredients
};


export const getIngredientSv = async (idIngredient: number) => {
  console.log("getIngredientsSv");
  let bdd = getBDD();

  if (!bdd.ingredients) {
    console.log("Données ingrédients inexistantes en base");
    throw new Error("Données ingrédients inexistantes en base");
  }
/*
  if (!bdd.ingredients.every(isIngredient)) {
    console.log("Type de données ingrédients incohérent entre la base et la description");
    throw new Error("Type de données ingrédients incohérent entre la base et la description");
  }
*/
  let index = bdd.ingredients.findIndex(
    (ingredient) => ingredient.id == idIngredient
  );

  if (index == -1) {     //verifier doc val retour de findIndex
    throw new Error("Ingredient inexistant");
  }
  else {
    return bdd.ingredients[index]
  }
};



export const addIngredientSv = async (newIngredient: Ingredient) => {
  console.log("addIngredientSv", newIngredient);
  /*
  if (!isIngredient(newIngredient)) {
    console.log("Format parametre ingredent incorrect");
    throw new Error("Format parametre ingredent incorrect");
  }*/
  let bdd = getBDD();

  /*
  if (!bdd.ingredients) {
    console.log("Données ingrédients inexistantes en base");
    throw new Error("Données ingrédients inexistantes en base");
  }*/
  /*
  if (!bdd.ingredients.every(isIngredient)) {
    console.log("Type de données ingrédients incohérent entre la base et la description");
    throw new Error("Type de données ingrédients incohérent entre la base et la description");
  }
    */
  const maxId = bdd.ingredients.reduce(       
    (max, item) => Math.max(max, item.id), 0
  );
  newIngredient.id = maxId + 1;
  console.log(newIngredient);
  bdd.ingredients.push(newIngredient);       
  saveBDD(bdd);                              
  return newIngredient
};


export const updateIngredientSv = async (pinIngredient: Ingredient) => {
  console.log("updateIngredientSv", pinIngredient);
  let bdd = getBDD();

  if (!bdd.ingredients) {
    throw new Error("Données ingrédients inexistantes en base");
  }
  /*
  if (!bdd.ingredients.every(isIngredient)) {
    throw new Error("Type de données ingrédients incohérent entre la base et la description");
  }
*/
  if (!bdd.recipes) {
    throw new Error("Données recettes inexistantes en base");
  }
  
  console.log("updateIngredientSv base OK");
  console.log("updateIngredientSv pinIngredient.id: ",pinIngredient.id);
  /*
  if (!bdd.recipes.every(isRecipe)) {
    throw new Error("Type de données recette incohérent entre la base et la description");
  }
*/
  let index = bdd.ingredients.findIndex(
    (ingredient) => ingredient.id == pinIngredient.id
  );
  
  console.log("updateIngredientSv index: ",index);

  if (index == -1) {
    throw new Error("Ingrdient inexistant");
  }

  bdd.ingredients[index] = pinIngredient

  //maj de toute les recettes en base (prix, desc...)
  /*
  bdd.recipes.forEach((recette) => {
    recette.ingredientsQte.forEach((ingQte) => {
      if (ingQte.ingredient.id == pinIngredient.id) {
        ingQte.ingredient = pinIngredient
      }
    })
  })
  */


  saveBDD(bdd);
  return pinIngredient
};


export const saveIngredientSv = async (pinIngredient: Ingredient) => {
  console.log("saveIngredientSv", pinIngredient);
  if (pinIngredient.id <= 0) {
    return addIngredientSv(pinIngredient)
  }
  else {
    return updateIngredientSv(pinIngredient)
  }
};






