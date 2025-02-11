



"use client";




import { useParams } from "next/navigation";

import IngredientForm from "@/components/ingredients/IngredientForm";

//import { useRouter } from "next/navigation";
//import IngredientForm from "../IngredientForm/IngredientForm";
import { saveIngredient } from "@/actions/ingredientsActions";



export default function IngredientUpdate({ params }: { params: { id: string } }) {




  const param = useParams() // Récupère l'ID depuis l'URL
  const id:number = Number(param.id); // Récupère l'ID depuis l'URL


  if (!id) return <p>Erreur : ID manquant.</p>;

  return <IngredientForm pin_ingredientID={id} fn_ingredient={saveIngredient} />;
}

