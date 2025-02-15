/*
'use client';

import IngredientForm from "@/components/ingredients/IngredientForm";
import { Ingredient, Units } from "@/utils/model";
import { getIngredientByID } from "@/actions/ingredientsActions";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { saveIngredient } from "@/actions/ingredientsActions";




export default function Home() {




  const param = useParams() // Récupère l'ID depuis l'URL
  const id:number = Number(param.id); // Récupère l'ID depuis l'URL

  console.log("IngredientPage: ID récupéré depuis useParams id   :", id);
  console.log("IngredientPage: ID récupéré depuis useParams param:", param);

  const RELOAD_QUERY_OPTIONS = {
    cacheTime: 0,                 // Supprimer les données immédiatement après le démontage
    staleTime: 0,                 // Considérer les données comme périmées immédiatement
    refetchOnWindowFocus: true,   // Recharger les données si la fenêtre est focalisée
    refetchOnMount: true,         // Force la requête à chaque montage
  } as const;

  if (!id) {
    return <p>Erreur : ID manquant dans l'URL.</p>;
  };


  return <p>Soon...</p>;

}

*/






