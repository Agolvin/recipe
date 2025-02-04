//Ne gérer qu'un ingrédient ic CRUD (create/read/update/delete)
//pour le reste => api/ingredients avec des filtres (user, categorie, prix,....)
//OK API accessible depuis http://localhost:3000/api/ingredients/[id]  


//import { NextRequest, NextResponse } from "next/server";
import { NextResponse } from "next/server";
import recipeData from '@/utils/bdd.json';
import { Ingredient } from "@/utils/model";

//import type { NextApiRequest, NextApiResponse } from 'next'
//import { request } from "http";

const allIngredients:Ingredient[] = recipeData.ingredients;


type ResponseData = {
  bOK:boolean,
  message: string,
  ingredient:Ingredient|undefined
}
 


//export const GET = async (request: Request, context: { params: Promise<{ id: number }> }) => {
export const GET = async (context: { params: Promise<{ id: number }> }) => {
  const params = await context.params;
  const ingRetour:Ingredient|undefined = allIngredients.find(item => item.id === params.id);
  const additionalData:ResponseData = {
    bOK: true,
    message: 'dbdbrds',
    ingredient: ingRetour
  };

  return NextResponse.json({ message: `Hello ${params.id}`,additionalData });
};









/*
export const POST = async (request: Request) => {
  const body = await request.json();
  return NextResponse.json({ message: `Hello ${body.name}` });
};
*/




/*
export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    return NextResponse.json({
      message: `Ingrédient par ID`,
    });
}
*/








/*


// Fonction GET pour récupérer l'ingrédient par ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  // Récupérer l'ID depuis l'URL
  const ingId = Number(params.id);

  // Trouver l'ingrédient avec l'ID
  const ingredient = ingredients.find(item => item.id === ingId);

  if (ingredient) {
    // Si l'ingrédient existe, on le retourne en réponse
    return NextResponse.json({
      message: `Ingrédient trouvé : ${ingredient.name}`,
      ingredient,
    });
  } else {
    // Si l'ingrédient n'est pas trouvé, on retourne un message d'erreur
    return NextResponse.json({
      message: `Ingrédient non trouvé pour l'ID : ${ingId}`,
    });
  }
}

*/




















/*
//export async function GET(request:NextRequest, context: { params: { id: string } }) 
export async function GET(request:NextRequest, {params} : { params: { id: string } }) 

{

  const ingId: number = Number(params.id);
  
  console.log(`/api/ingredients/ID: ${ingId}` );
  //console.log(`IngID: ${ingId}`);
  //console.log(`context.params: ${context.params}`);
  //console.log(`context.params.id: ${context.params.id}`);



  const returnIng:Ingredient[] = allIngredients.filter(r => r.id === ingId);

  console.log(`/api/ingredients/ID: ${ingId}` );

  return NextResponse.json({ message: "ingredient par ID nextJS avec parametre: " + ingId + returnIng});
}
*/



























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