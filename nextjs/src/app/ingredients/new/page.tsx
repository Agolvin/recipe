
"use client"


import React from "react";
import { useRouter } from "next/navigation";
import IngredientForm from "@/components/ingredients/IngredientForm";
import { addIngredient } from "@/actions/ingredientsActions";
import { Ingredient } from "@/utils/model";





const AddItem = () => {
  const router = useRouter();
  const handleAddItem = async (data: Ingredient) => {
    const response:Ingredient = await addIngredient(data)
    console.log("response front: " , response);
    router.push(`/ingredients`);
  };

  return (
    <div>
      <h1>Ajouter un nouvel ingredient</h1>
      <IngredientForm onSubmit={handleAddItem} />
      <br />
      <br />
      Ajout semble fonctionner correctement mais n apparait pas dans la liste au premier affichage, ok si on retourne sur la liste après.
    </div>
  );

};
/*
const AddItem = () => {
  const router = useRouter();
  const handleAddItem = async (data: Ingredient) => {
    const response:Ingredient = await addIngredient(data)
    console.log("response front: " , response);
    router.push(`/ingredients`);
  };

  return (
    <div>
      <h1>Ajouter un nouvel ingredient</h1>
      <IngredientForm onSubmit={handleAddItem} />
    </div>
  );
  
};*/





export default AddItem;



/*


"use client";
import IngredientForm from "@/components/ingredients/IngredientForm";
import { addIngredient } from "@/actions/ingredientsActions";

export default function Home() {
//export default function Home({ params }: { params: { id: string } }) {
  
  const id:number = 0; // Récupère l'ID depuis l'URL

  return (
  <div>

    <br />
    <IngredientForm pin_ingredientID={id} fn_ingredient={addIngredient} />
    <br />
    <br />
    add en test semble OK<br />
    soon: gestion unités (gr/kg/L...) <br />
  </div>
  
  );
}



*/






