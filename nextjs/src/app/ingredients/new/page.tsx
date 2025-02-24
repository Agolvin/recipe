
'use client'

import { addIngredient } from "@/actions/ingredientsActions";
import IngredientForm from "@/components/ingredients/IngredientForm";
import { useGlobalContext } from "@/context/globlaContext";
import { Ingredient } from "@/utils/model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const AddItem = () => {
  
  const { userID } = useGlobalContext();
  const router = useRouter();
  const queryClient = useQueryClient(); // Accéder au cache React Query

  const mutation = useMutation({
    mutationFn: addIngredient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ingredients"],userID });// Force le refresh
      router.push(`/ingredients`);
    },
  });

  const handleAddItem = async (data: Ingredient) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <h1>Ajouter un nouvel ingrédient</h1>
      <IngredientForm onSubmit={handleAddItem} />
      <br />
      <br />
      Ajout semble fonctionner correctement.
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






