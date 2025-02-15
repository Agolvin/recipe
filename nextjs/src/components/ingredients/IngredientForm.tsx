"use client";

import { getIngredientByID } from "@/actions/ingredientsActions";
import { Ingredient } from "@/utils/model";
import { useForm } from "react-hook-form";
import React, { useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useGlobalContext } from "@/context/globlaContext";

type IngredientFormProps = {
  fn_ingredient: (ingredient: Ingredient) => Promise<Ingredient>;
  pin_ingredientID?: number; // ID facultatif : utilisé pour l'update
};

const IngredientForm = ({ fn_ingredient, pin_ingredientID }: IngredientFormProps) => {
  const { userID } = useGlobalContext();
  const ingredientID = pin_ingredientID?.toString();
  const queryClient = useQueryClient();

  // 🔄 Chargement de l'ingrédient si `ingredientID` est fourni (mode update)
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["ingredient", ingredientID],
    queryFn: () => (ingredientID && ingredientID !== "0" ? getIngredientByID(Number(ingredientID)) : null),
    enabled: Boolean(ingredientID && ingredientID !== "0"), // Exécuter la requête seulement si un ID est présent et différent de 0
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset, // Permet de mettre à jour les valeurs du formulaire
  } = useForm<Ingredient>();

  const isFirstLoad = useRef(true);

  // ⚡ Mettre à jour les valeurs du formulaire quand les données sont disponibles
  useEffect(() => {
    if (data || pin_ingredientID === 0) {
      // Si c'est un ajout (ID=0) ou qu'on a des données à afficher
      const initialValues: Ingredient = pin_ingredientID === 0 || !data ? {
        id: 0,
        idUser: userID,
        name: "",
        description: "",
        price: 0,
        unit: "", // Unité par défaut, à ajuster selon le modèle
      } : data;

      // Réinitialiser avec les données récupérées ou par défaut uniquement si c'est le premier chargement
      if (isFirstLoad.current) {
        reset(initialValues);
        isFirstLoad.current = false;
      }
    }
  }, [data, reset, pin_ingredientID, userID]);

  const onSubmit = async (formData: Ingredient) => {
    try {
      await fn_ingredient({ ...formData, idUser: userID });

      // Invalider le cache pour recharger les données, à retirer si nécessaire
      if (ingredientID && ingredientID !== "0") {
        queryClient.invalidateQueries({ queryKey: ["ingredient", ingredientID] });
      }
    } catch (err) {
      setError("root", { message: (err as Error).message });
    }
  };

  if (isLoading) return <p>Chargement des données...</p>;
  if (isError) return <p>Erreur : {error?.message}</p>;

  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <h2>{pin_ingredientID === 0 ? "Ajouter un ingrédient" : "Modifier un ingrédient"}</h2>

      <label>Nom :</label>
      <input
        {...register("name", {
          required: "Ce champ est requis",
          maxLength: { value: 100, message: "Max 100 caractères" },
          minLength: { value: 5, message: "Min 5 caractères" },
        })}
        placeholder="Nom"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Description :</label>
      <input {...register("description", { required: "Ce champ est requis" })} placeholder="Description" />
      {errors.description && <p>{errors.description.message}</p>}

      <label>Prix :</label>
      <input
        type="number"
        {...register("price", { required: "Ce champ est requis", valueAsNumber: true })}
        placeholder="Prix"
        step="0.01"
      />
      {errors.price && <p>{errors.price.message}</p>}

      <button type="submit">{pin_ingredientID === 0 ? "Ajouter" : "Modifier"}</button>
      {errors.root && <p>{errors.root.message}</p>}
    </form>
  );
};

export default IngredientForm;
