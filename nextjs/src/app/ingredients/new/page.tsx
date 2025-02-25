"use client";

import IngredientForm from "@/components/ingredients/IngredientForm";
import { useRouter } from "next/navigation";

const AddItem = () => {
  const router = useRouter();

  // Redirige après l'ajout
  const handleSuccess = () => {
    router.push(`/ingredients`);
  };

  return (
    <div>
      <h1>Ajouter un nouvel ingrédient</h1>
      <IngredientForm onSubmit={handleSuccess} />
    </div>
  );
};

export default AddItem;





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






