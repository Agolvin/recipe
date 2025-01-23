
'use client'

/*
import { Recipe } from "@/utils/model";
import getUserRecipes from "@/app/recettes/api"
*/



import { testAction } from "../api/actions/testActions";



export default function Home() {

  const handleSubmit = async () => {
    const input = { name: "Ale Candas"};
    const result = await testAction(input); // Appel à la Server Action
    alert(result); // Affiche le message retourné par le serveur
  };


  return (
   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      

      
      <h1>PAGE DE TEST</h1>

      <button onClick={handleSubmit}>Envoyer des données au serveur</button>


        </main>
    </div>
  );
}

