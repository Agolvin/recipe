
'use server'

import { Ingredient } from "@/utils/model";
//import recipeData from '@/utils/bdd.json';
import { getBDD } from "@/utils/utils";
import { saveBDD } from "@/utils/utils";
import recipeData from '@/utils/bdd.json';
import { Bdd } from "@/models/models";


export async function getIngredientsUser(input: { p_idUser: number }) {
        let usrIngredient:Ingredient[] = recipeData.ingredients; 
        usrIngredient = usrIngredient.filter(ing => ing.idUser == input.p_idUser)
        return usrIngredient
  }





//export async function getAllIngredientsTEST(input: { p_idUser: number }) {
export async function getAllIngredientsTEST() {
    const bdd:Bdd = getBDD();
    return bdd.ingredients;
/*
    let usrIngredient:Ingredient[] = 
    usrIngredient = usrIngredient.filter(ing => ing.idUser == input.p_idUser)
    return usrIngredient

*/
}








export async function addIngredient(p_ing: Ingredient) {

    let bdd:Bdd = getBDD();

    const maxId = bdd.ingredients.reduce(       
      (max, item) => Math.max(max, item.id), 0
    );
    p_ing.id = maxId + 1;
    console.log(p_ing);
    bdd.ingredients.push(p_ing);       
    saveBDD(bdd);                              
    return p_ing;
}
