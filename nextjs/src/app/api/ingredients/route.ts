


// permet de récupérer une liste d'ingredient ave filtres optionnels (user, categorie, prix...) mais pas l'id
// retour: Ingredient[]


import { NextRequest, NextResponse } from "next/server";
import recipeData from '@/utils/bdd.json';
import { Ingredient } from "@/utils/model";


//== comparaison en convertissnt des types potentiellement differents A BANNIR
//=== comparaison sur meme types, erreur sinon A UTILISER

//accessible depuis http://localhost:3000/api/ingredients



var allIngredients:Ingredient[] = recipeData.ingredients;

export async function GET(request:NextRequest) {
    
    console.log('api/ingredients')

    const allowedParams = new Set(["userId", "minPrice", "maxPrice"]);
    const { searchParams } = new URL(request.url);
    const receivedParams = Array.from(searchParams.keys());
    const unknownParams = receivedParams.filter(param => !allowedParams.has(param));

    if (unknownParams.length > 0) {
        return Response.json(
            { error: "Unknown parameters", details: unknownParams },
            { status: 400 });
    }

    const userId:number = Number(searchParams.get("userId"));
    const minPrice:number = Number(searchParams.get("minPrice"));
    const maxPrice:number = Number(searchParams.get("maxPrice"));
    //const category = searchParams.get("category");

    allIngredients = userId ? allIngredients.filter(r => r.price === userId) : allIngredients;
    allIngredients = minPrice ? allIngredients.filter(r => r.price >= minPrice) : allIngredients;
    allIngredients = maxPrice ? allIngredients.filter(r => r.price <= maxPrice) : allIngredients;

    return Response.json({ allIngredients });

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