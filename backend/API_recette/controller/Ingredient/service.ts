

import fs from "fs";
import { Bdd,Recipe,Ingredient, isIngredient } from "../../../../shared/models/recipe.model";
  
//const ingredients: Ingredient[] = [];

export const getAllIngredientsSv = async () => {
  const data = fs.readFileSync("../bdd.json", "utf8");    //recuperation données depuis bdd.json
  let bdd = JSON.parse(data) as Bdd;                      //transfert en json dans variable

  if (!bdd.ingredients) {
    throw new Error("Données ingrédients inexistantes en base");
  }

  if(!bdd.ingredients.every(isIngredient)){
    throw new Error("Type de données ingrédients incohérent entre la base et la description");
  }

  return bdd.ingredients
};








export const addIngredientSv = async (newIngredient:Ingredient) => {










  const data = fs.readFileSync("../bdd.json", "utf8");    //recuperation données depuis bdd.json
  let bdd = JSON.parse(data) as Bdd;                      //transfert en json dans variable



  


  if (!bdd.ingredients) {
    throw new Error("Données ingrédients inexistantes en base");
  }

  if(!bdd.ingredients.every(isIngredient)){
    throw new Error("Type de données ingrédients incohérent entre la base et la description");
  }

  return bdd.ingredients











};









/*
  if (!bdd.ingredients) {
    return res
      .status(500)
      .json({ message: "Données de recettes inexistantes" });
  }
*/

/*
  if (!bdd.ingredients) {
    return res
      .status(500)
      .json({ message: "Données de recettes inexistantes" });
  }
  return ingredients;
  */










//import fs from "fs";
//import { Request as req, Response as res } from "express";
//import { Bdd,Recipe } from "../../../../shared/models/recipe.model";
//import { getBDD, saveBDD } from "../../lib/utils";

/*
const getAllRecipes = (req: req, res: res) => {
  const data = fs.readFileSync("../bdd.json", "utf8"); //recuperation données depuis bdd.json
  let bdd = JSON.parse(data) as Bdd;      //transfert en json dans variable

  if (!bdd.recipes) {
    return res
      .status(500)
      .json({ message: "Données de recettes inexistantes" });
  }

  res.status(200).json(bdd.recipes);
};

*/


/*
export const addIngredientService = async (ingredient: Partial<Ingredient>): Promise<Ingredient> => {
  const newIngredient = { id: Date.now(), ...ingredient } as Ingredient;
  ingredients.push(newIngredient);
  return newIngredient;
};
*/




  /*
  export const getAllIngredientsService = async (): Promise<Ingredient[]> => {
    return ingredients;
  };
  */

  /*
  export const addIngredientService = async (ingredient: Partial<Ingredient>): Promise<Ingredient> => {
    const newIngredient = { id: Date.now(), ...ingredient } as Ingredient;
    ingredients.push(newIngredient);
    return newIngredient;
  };
*/




/*
  exports.getAllIngredientsService = async (): Promise<Ingredient[]> => {
    return ingredients;
  };*/






