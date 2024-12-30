

import { Ingredient,Ingredient2, isIngredient, isRecipe, UnitEnum } from "../../shared/back.model";
import { getBDD, saveBDD } from "../../lib/utils";




export const testToolsSv = async () => {
    console.log("testToolsSv");
};


export const migrationToolsSv = async () => {


  console.log("migrationToolsSv");

  let bdd = getBDD();

  bdd.ingredientstmp.length = 0;    //suppression de toutes les données





/*

  bdd.ingredients.forEach((ing_old) => {
    const ing_new:Ingredient2 = {
      id: ing_old.id,
      unit: UnitEnum.GRAM,           
      name: ing_old.name,
      description: ing_old.description, 
      price: ing_old.price,       
    };
    switch(ing_old.id) {
      case 1:
        ing_new.unit = UnitEnum.GRAM
        break;
      case 2:
        ing_new.unit = Units.LITRE
        break;
      case 3:
        ing_new.unit = Units.KILOGRAM
        break;
      case 4:
        ing_new.unit = Units.KILOGRAM
        break;
      case 5:
        ing_new.unit = Units.LITRE
        break;
      case 6:
        ing_new.unit = Units.PIECE
        break;
      default:
        ing_new.unit = Units.GRAM
    } 
    bdd.ingredientstmp.push(ing_new);
    console.log(ing_old);
    console.log(ing_new);
  });
*/

  saveBDD(bdd);         

};