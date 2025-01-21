
'use client';


import { Ingredient } from "@/utils/model";
import recipeData from '@/utils/bdd.json';

export function getIngredient(p_IdIng:number){
    //const ing:Ingredient|undefined;
    const allIngredients:Ingredient[] = recipeData.ingredients;
    const ing:Ingredient|undefined = allIngredients.find((elt) => elt.id = p_IdIng);
    return ing;
}

export function addIngredient(p_Ing:Ingredient){
  let allIngredients:Ingredient[] = recipeData.ingredients;
  allIngredients.push(p_Ing);
  return p_Ing;
}





//export default getIngredient;addIngredient;







/*
const getUserIngredients = (p_idUser:number) => {//remettre async???
  console.log("debut getUserIngredients");
  let usrIngredient:Ingredient[] = recipeData.ingredients;   //A faire remettre le unit(string) en unitEnum 
  console.log("ingredients complet",usrIngredient);
  usrIngredient = usrIngredient.filter(ing => ing.idUser == p_idUser)
  console.log("ingredients filtré",usrIngredient);
  return usrIngredient
};
export default getUserIngredients ;
*/



/*

import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma'; // Exemple avec Prisma

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const updatedIngredient = await prisma.ingredient.update({
    where: { id: Number(params.id) },
    data: { name: body.name },
  });
  return NextResponse.json(updatedIngredient);
}

*/


