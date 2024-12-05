

//import fs from "fs";
import { Bdd,Recipe,Ingredient, isIngredient } from "../../../../shared/models/recipe.model";
import { getBDD, saveBDD } from "../../lib/utils";
  
//const ingredients: Ingredient[] = [];

export const getAllIngredientsSv = async () => {

  console.log("getAllIngredientsSv");
  let bdd = getBDD();


  if (!bdd.ingredients) {
    throw new Error("Données ingrédients inexistantes en base");
  }

  if(!bdd.ingredients.every(isIngredient)){
    throw new Error("Type de données ingrédients incohérent entre la base et la description");
  }

  return bdd.ingredients
};


export const addIngredientSv = async (newIngredient:Ingredient) => {

  //type du parametre deja controllé par le controller
  //=> le service n'a plus qu'a l'ajouter en base sans vérifier ce qu'il reçoit
  
  console.log("addIngredientSv",newIngredient);

  let bdd = getBDD();

  if (!bdd.ingredients) {
    throw new Error("Données ingrédients inexistantes en base");
  }

  if(!bdd.ingredients.every(isIngredient)){
    throw new Error("Type de données ingrédients incohérent entre la base et la description");
  }

  const maxId = bdd.ingredients.reduce(       //calcul du nouvel ID à inserer en base
    (max, item) => Math.max(max, item.id), 0
  );
  newIngredient.id = maxId + 1;

  bdd.ingredients.push(newIngredient);        //ajout dans la copie de bdd, du nouvel ingredient
  saveBDD(bdd);                               //sauvegarde de la bdd
  
  return newIngredient 

};

