import { NextRequest, NextResponse } from "next/server";
import recipeData from '@/utils/bdd.json';
import { Ingredient } from "@/utils/model";

//OK API accessible depuis http://localhost:3000/api/ingredients/17  





const allIngredients:Ingredient[] = recipeData.ingredients;



export async function GET(request:NextRequest) {


  
  const { searchParams } = new URL(request.url);
/*
  const userId = searchParams.get("userId");
  const category = searchParams.get("category");
  const indredientId = searchParams.get("indredientId");

*/


  return Response.json({ message: "ingredient par ID nextJS avec parametres: " + searchParams });
}




/*
export async function GET(request) {
    return Response.json({ message: "ingredient par ID" });
}
*/


/*
const allIngredients:Ingredient[] = recipeData.ingredients;

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const ingredient:Ingredient|undefined = allIngredients.find((item) => item.id === Number(params.id));

  if (!ingredient) {
    return NextResponse.json({ error: "Ingrédient non trouvé" }, { status: 404 });
  }

  return NextResponse.json(ingredient);
}
*/