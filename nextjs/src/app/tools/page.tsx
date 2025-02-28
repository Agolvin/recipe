
'use client'

/*
import { Recipe } from "@/utils/model";
import getUserRecipes from "@/app/recettes/api"
*/

import { useState, useEffect } from 'react';


import { getBDD } from "@/utils/utils";
import { Bdd } from "@/utils/model";


export default function Home() {




  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Bdd | null>(null);


  //const base:Bdd = getBDD();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBDD();
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);



  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!data) {
    return <div>Aucune donnée</div>;
  }


  return (
   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  
      <h1>TOOLS</h1>

    <div>
      <h1>Recettes</h1>
      <ul>
        {data.recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>

          <br />
          <br />
          <br />
          <br />

      <h1>Ingrédients</h1>
      <ul>
        {data.ingredients.map((ingredient, index) => (
          <div key={ingredient.id}>
          <li key={index}>nom: {ingredient.name}/{ingredient.id}</li>
          <li>desc: {ingredient.description}</li>
          <li>user: {ingredient.idUser}</li>
          <li>prix: {ingredient.price}</li>
          <li>unité: {ingredient.unit}</li>
          <br />
          </div>
        ))}
      </ul>
    </div>

    </div>
  );
}

