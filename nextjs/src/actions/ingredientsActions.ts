
'use server'

import { Ingredient } from "@/utils/model";
import { getBDD } from "@/utils/utils";
import { saveBDD } from "@/utils/utils";
import { Bdd } from "@/utils/model";

export async function getIngredientsUser(p_idUser: number) {
  const bdd:Bdd = await getBDD();
  let usrIngredient:Ingredient[] = bdd.ingredients; 
  usrIngredient = usrIngredient.filter(ing => ing.idUser === p_idUser)
  return usrIngredient
}

export async function getAllIngredientsTEST() {
    const bdd:Bdd = await getBDD();
    return bdd.ingredients;
}

export async function getAllIngredients() {
  const bdd:Bdd = await getBDD();
  return bdd.ingredients;
}

export async function addIngredient(p_ing: Ingredient) {
    const bdd:Bdd = await getBDD();
    const maxId = bdd.ingredients.reduce(       
      (max, item) => Math.max(max, item.id), 0
    );
    p_ing.id = maxId + 1;
    bdd.ingredients.push(p_ing);       
    console.log("serveaction addIngredient avantSaveBDD:",p_ing);   
    saveBDD(bdd);    
    console.log("serveaction addIngredient retour :",p_ing);       
    return p_ing;
}


export async function getIngredientByID(id: number): Promise<Ingredient> {
  const bdd:Bdd = await getBDD();
  const ingredient = bdd.ingredients.find(r => r.id === id);
  if (!ingredient) {
    throw new Error("Ingrédient non trouvé");
  }
  return ingredient;
}

/*
export function syncGetIngredientByID(id: number, callback: (ingredient: Ingredient | null) => void) {
  getBDD().then((bdd: Bdd) => {
    const ingredient = bdd.ingredients.find(r => r.id === id);
    if (!ingredient) {
      callback(null);
      return;
    }
    callback(ingredient);
  }).catch(err => {
    callback(null); // Gestion d'erreur si nécessaire
  });
}
*/

export async function updateIngredient(p_ing: Ingredient) {
  const bdd:Bdd = await getBDD();
  const ind = bdd.ingredients.findIndex((elt) => elt.id === p_ing.id);
  bdd.ingredients[ind] = p_ing;   
  saveBDD(bdd);                              
  return p_ing;
}


export async function saveIngredient(p_ing: Ingredient) {
  if (p_ing.id > 0) {
    await updateIngredient(p_ing);
  } else {
    await addIngredient(p_ing);
  }
  return p_ing;
}


export async function deleteIngredient(p_ing: Ingredient) {
  const bdd:Bdd = await getBDD();
  const ind = bdd.ingredients.findIndex((elt) => elt.id === p_ing.id);
  bdd.ingredients.splice(ind,1)
  saveBDD(bdd);                              
  return p_ing;
}


export async function deleteIngredientByID(p_ingID: number) {
  const bdd:Bdd = await getBDD();
  const ind = bdd.ingredients.findIndex((elt) => elt.id === p_ingID);
  bdd.ingredients.splice(ind,1)
  saveBDD(bdd);                              
  return 1;
}

