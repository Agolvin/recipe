"use client";




import React from 'react';
//import React, { useState, useEffect } from 'react';
//import { getIngredientByID } from "@/actions/ingredientsActions";


import { saveIngredient } from "@/actions/ingredientsActions";

import IngredientForm from '@/components/ingredients/IngredientForm';
import { useParams } from 'next/navigation';
import { Ingredient } from '@/utils/model';

//import IngredientForm from './IngredientForm';

const IngredientEditPage = () => {
  
  
  const  id  = useParams();
  
  console.log("useParams id=",id)
  //const router = useRouter();
  const ingredientID = Number(id.id);
  console.log("appel formulaire id=",ingredientID)
  //const ingredientID = 1; // ID de l'ingrédient à modifier

  const handleSubmit = (data: Ingredient) => {
    // Enregistrer les modifications
    saveIngredient(data);
  };

  return (
    <div>
      <h1>Édition de ingrédient</h1>
      <IngredientForm initialData={undefined} onSubmit={handleSubmit} ingredientID={ingredientID} />
    </div>
  );
};

export default IngredientEditPage;









/*

import React from "react";
import IngredientForm from "@/components/ingredients/IngredientForm";
import { Ingredient } from "@/utils/model";
import { saveIngredient } from "@/actions/ingredientsActions";

import { getIngredientByID } from "@/actions/ingredientsActions";
import { useParams,useRouter  } from "next/navigation";
const IngredientEditPage = () => {

  const { id } = useParams();
  //const router = useRouter();
  const ingredientID = Number(id);
/*

  const ingredient = getIngredientByID(ingredientID);



  const handleSubmit = (data: Ingredient) => {
    console.log("Soumission du formulaire :", data);
    saveIngredient(data);
    // Appeler l'API pour mettre à jour l'ingredient
  };

  return (
    <div>
      <h1>Édition de l'ingredient</h1>
      <IngredientForm initialData={ingredient} onSubmit={handleSubmit} />
    </div>
  );
};
export default IngredientEditPage;
*/













/*
//import { useParams, useRouter } from "next/navigation";
import { useParams,useRouter  } from "next/navigation";
import React from "react";
import IngredientForm from "@/components/ingredients/IngredientForm";


const EditIngredient = () => {
  const { id } = useParams();
  const router = useRouter();
  const ingredientID = Number(id); // Convertir l'ID en nombre

  return (
    <div>
      <h1>Modifier ingrédient</h1>
      <IngredientForm ingredientID={ingredientID} onSubmit={() => router.push("/ingredients")} />
    </div>
  );
};

export default EditIngredient;

*/


/*

"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IngredientForm from "@/components/ingredients/IngredientForm";
import { saveIngredient } from "@/actions/ingredientsActions";
import { getIngredientByID } from "@/actions/ingredientsActions";
import { Ingredient } from "@/utils/model";

const EditIngredient = () => {
  const router = useRouter();
  const param = useParams(); // Récupère l'ID depuis l'URL
  const id: number = Number(param.id); // Récupère l'ID depuis l'URL

  // Déclaration du hook useState avant toute logique conditionnelle
  const [ingredient, setIngredient] = useState<Ingredient | null>(null);
  const [loading, setLoading] = useState(true); // Indicateur de chargement

  useEffect(() => {
    if (!id) {
      setLoading(false); // Arrêter le chargement si l'ID est manquant
      return;
    }

    // Charger l'ingrédient de manière asynchrone
    const fetchIngredient = async () => {
      const result = await getIngredientByID(id);
      if (result) {
        setIngredient(result); // Si l'ingrédient est trouvé, on le stocke dans l'état
      } else {
        alert("Ingrédient non trouvé");
      }
      setLoading(false); // Arrêter le chargement après récupération
    };

    fetchIngredient(); // Appel à la fonction asynchrone
  }, [id]);

  // Handle de la mise à jour d'un ingrédient
  const handleUpdateItem = async (data: Ingredient) => {
    const response: Ingredient = await saveIngredient(data);
    if (response) {
      alert("Ingrédient mis à jour avec succès!");
      router.push(`/ingredients/${id}/edit`);
    } else {
      alert("Erreur lors de la mise à jour de ingrédient.");
    }
  };

  // Affiche un message de chargement tant que l'ingrédient n'est pas récupéré ou ID manquant
  if (loading) {
    return <p>Chargement...</p>;
  }

  // Si l'ID est manquant, afficher un message d'erreur après avoir arrêté le chargement
  if (!id) {
    return <p>Erreur : ID manquant.</p>;
  }

  return (
    <div>
      <h1>Modifier ingrédient</h1>
      <IngredientForm onSubmit={handleUpdateItem} initialData={ingredient}  /> { Passer initialData avec l'ingrédient }
      <br />
      <br />
      La modification semble foncionner correctement. <br />
    </div>
  );
};

export default EditIngredient;


*/




/*

"use client";

import { useParams } from "next/navigation";
import IngredientForm from "@/components/ingredients/IngredientForm";
import { saveIngredient } from "@/actions/ingredientsActions";

export default function IngredientUpdate() {
//export default function IngredientUpdate({ params }: { params: { id: string } }) {

  const param = useParams() // Récupère l'ID depuis l'URL
  const id:number = Number(param.id); // Récupère l'ID depuis l'URL

  if (!id) return <p>Erreur : ID manquant.</p>;

  return (
  
  <div>
    <br />
    <IngredientForm pin_ingredientID={id} fn_ingredient={saveIngredient} />
    <br />

    <br />
    Page de modif semble OK<br />
    Bug 1(ok): raffraichissement affchichage à la validation <br />
    Bug 2 (ok): erreur Turbopack HMR: résolu <br /> 
    Bug 3 (ok): un peu lent à la validation, met du temps à recharger sans bloquer la saisie: optimistic update <br />
    Ajouter retour à la liste? <br />
    Message update ok ?<br />
    soon: gestion unités (gr/kg/L...) <br />

  </div>
  
  );
}
*/













/*


// /pages/items/[id].tsx

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ItemForm from "../../components/ItemForm";

const EditItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<null | { id: number; name: string; description: string }>(null);

  useEffect(() => {
    if (id) {
      // Charger les données de l'item (exemple avec une API)
      const fetchItem = async () => {
        const response = await fetch(`/api/items/${id}`);
        const data = await response.json();
        setItem(data);
      };
      fetchItem();
    }
  }, [id]);

  const handleUpdateItem = async (data: { name: string; description: string }) => {
    const response = await fetch(`/api/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const updatedItem = await response.json();

    // Redirection après mise à jour
    router.push(`/items/${updatedItem.id}`);
  };

  if (!item) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h1>Modifier l'item</h1>
      <ItemForm onSubmit={handleUpdateItem} initialData={item} />
    </div>
  );
};

export default EditItem;*/