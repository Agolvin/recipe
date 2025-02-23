
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
    console.log(p_ing);
    bdd.ingredients.push(p_ing);       
    saveBDD(bdd);                              
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



/*
export async function getIngredientsByIDold(input: { p_idIng: number }) {
  const ingredient:Ingredient|undefined = recipeData.ingredients.find(ing => ing.id === input.p_idIng)
  return ingredient
}
*/

/*
export async function getIngredientByID(id: number) {
  const ingredient = recipeData.ingredients.find(r => r.id === id);
  if (!ingredient) {
    return { error: "Ingrédient non trouvé", status: 404 }; // Retourne un objet d'erreur
  }
  return { data: ingredient, status: 200 }; // Toujours un objet structuré
}

*/




//export async function saveIngredient(formData: FormData) {

/*
  const ingredient = recipeData.ingredients.find(r => r.id === id);
  if (!ingredient) {
    return { error: "Ingrédient non trouvé", status: 404 }; // Retourne un objet d'erreur
  }
  return { data: ingredient, status: 200 }; // Toujours un objet structuré
*/

//}
