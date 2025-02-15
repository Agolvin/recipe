
"use client";

import { useParams } from "next/navigation";
import IngredientForm from "@/components/ingredients/IngredientForm";
import { saveIngredient } from "@/actions/ingredientsActions";

export default function IngredientUpdate({ params }: { params: { id: string } }) {

  const param = useParams() // Récupère l'ID depuis l'URL
  const id:number = Number(param.id); // Récupère l'ID depuis l'URL

  if (!id) return <p>Erreur : ID manquant.</p>;

  return (
  
  <div>
    Page de modif semble OK<br />
    Bug 1(ok): raffraichissement affchichage à la validation <br />
    Bug 2 (ok): erreur 'Turbopack HMR': résolu <br /> 
    Bug 3 (ok): un peu lent à la validation, met du temps à recharger sans bloquer la saisie: optimistic update <br />
    Ajouter retour à la liste et message "update ok" ?<br />
    soon: gestion unités (gr/kg/L...) <br />
    <br />
    <IngredientForm pin_ingredientID={id} fn_ingredient={saveIngredient} />
  </div>
  
  );
}
