




import { NextRequest, NextResponse } from "next/server";

import recipeData from '@/utils/bdd.json';

import { Ingredient } from "@/utils/model";

const allIngredients:Ingredient[] = recipeData.ingredients;


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const ingredient:Ingredient|undefined = allIngredients.find((item) => item.id === Number(params.id));

  if (!ingredient) {
    return NextResponse.json({ error: "Ingrédient non trouvé" }, { status: 404 });
  }

  return NextResponse.json(ingredient);
}


/*


export function getIngredient(p_IdIng:number){
    //const ing:Ingredient|undefined;
    const allIngredients:Ingredient[] = recipeData.ingredients;
    const ing:Ingredient|undefined = allIngredients.find((elt) => elt.id = p_IdIng);
    return ing;
}



import { Ingredient } from "@/utils/model";
import recipeData from '@/utils/bdd.json';

export function getIngredient(p_IdIng:number){
    //const ing:Ingredient|undefined;
    const allIngredients:Ingredient[] = recipeData.ingredients;
    const ing:Ingredient|undefined = allIngredients.find((elt) => elt.id = p_IdIng);
    return ing;
}

export function addIngredient(p_Ing:Ingredient){
  const allIngredients:Ingredient[] = recipeData.ingredients;
  allIngredients.push(p_Ing);
  return p_Ing;
}

*/