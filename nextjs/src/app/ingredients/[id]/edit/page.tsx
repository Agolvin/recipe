
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

  // Si l'ID est manquant, retourner un message d'erreur tout de suite
  if (!id) {
    return <p>Erreur : ID manquant.</p>;
  }

  // Charger l'ingrédient de manière asynchrone
  useEffect(() => {
    const fetchIngredient = async () => {
      const result = await getIngredientByID(id);
      if (result) {
        setIngredient(result); // Si l'ingrédient est trouvé, on le stocke dans l'état
      } else {
        alert("Ingrédient non trouvé");
      }
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
      alert("Erreur lors de la mise à jour de l'ingrédient.");
    }
  };

  // Affiche un message de chargement tant que l'ingrédient n'est pas récupéré
  if (!ingredient) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h1>Modifier l'ingrédient</h1>
      <IngredientForm onSubmit={handleUpdateItem} initialData={ingredient} /> {/* Passer initialData avec l'ingrédient */}
    </div>
  );
};

export default EditIngredient;

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