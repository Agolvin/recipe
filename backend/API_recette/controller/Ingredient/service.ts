

import { Bdd,Recipe,Ingredient, isIngredient } from "../../../../shared/models/recipe.model";
import { getBDD, saveBDD } from "../../lib/utils";
  

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



export const getIngredientSv = async (idIngredient:number) => {
  console.log("getIngredientsSv");
  let bdd = getBDD();
  if (!bdd.ingredients) {
    throw new Error("Données ingrédients inexistantes en base");
  }
  if(!bdd.ingredients.every(isIngredient)){
    throw new Error("Type de données ingrédients incohérent entre la base et la description");
  }

    let index = bdd.ingredients.findIndex(
      (ingredient) => ingredient.id == idIngredient
    );

    if (index==-1) {     //verifier doc val retour de findIndex
      throw new Error("Ingredient inexistant");
    }
    else
    {
      return bdd.ingredients[index]
    }
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

