
'use client'

import { testAction } from "../../actions/testActions";
//import { getIngredientsUser } from "../../actions/ingredientsActions";
import { addIngredient } from "../../actions/ingredientsActions";
import { Ingredient } from "@/utils/model";
import { getAllIngredientsTEST } from "../../actions/ingredientsActions";
import Link from "next/link";
export default function Home() {

  const handleSubmit = async () => {
    const input = { name: "Ale Candas"};
    const result = await testAction(input); // Appel à la Server Action
    alert(result); // Affiche le message retourné par le serveur
  };

  /*
  const handleSubmit2 = async () => {
    const input = { p_idUser: 1};
    const result = await getIngredientsUser(input); // Appel à la Server Action
    alert(result); // Affiche le message retourné par le serveur
  };
*/




  const handleSubmit3 = async () => {
    const input:Ingredient = {
      id: 1851684,
      idUser: 1,   
      unit: 'unité ',   
      name: 'test de addIngredient server action',
      description: 'desc', 
      price: 137,   
    }
    const result = await addIngredient(input); 
    alert(result); 
  };



  const handleSubmit4 = async () => {
    const result = await getAllIngredientsTEST(); // Appel à la Server Action
    alert(result); // Affiche le message retourné par le serveur
  };






//http://localhost:3000/api/ingredients/17



  return (
   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
      <h1>PAGE DE TEST</h1>
      <h2>Test des server actions: </h2>

      
      <Link href={`/api/utils/test`}> TEST API NextJS beta ok</Link>
      <Link href={`/api/utils/test?category=dessert&userId=1`}> TEST API GET Ingredient avec param</Link>
      <Link href={`/api/ingredients/3`}> TEST API GET Ingredient 3</Link>
      <Link href={`/api/ingredients/17`}> TEST API GET Ingredient 17</Link>


      <button onClick={handleSubmit}>Test server action</button>
      <button onClick={handleSubmit3}>Test addIngredient (ne pas spamer please), test désactivé</button>
      <button onClick={handleSubmit4}>getAllIngredientsTEST</button>
      </main>
    </div>
  );
}


//<button onClick={handleSubmit2}>Test ingredients user 1</button>


//<button onClick={handleSubmit3}>Test addIngredient (ne pas spamer please), test désactivé</button>