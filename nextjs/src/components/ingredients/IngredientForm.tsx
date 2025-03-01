

'use client'

import React, { useState, useEffect } from 'react';
import { getIngredientByID, saveIngredient } from "@/actions/ingredientsActions";
import { Ingredient } from '@/utils/model';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from "@/context/globlaContext";

interface IngredientFormProps {
  pin_ingredientID: number;
  onSubmit?: () => void;
}

const IngredientForm = ({ pin_ingredientID, onSubmit: onSubmitCallback }: IngredientFormProps) => {
 
  const { register, handleSubmit,setValue } = useForm<Ingredient>({
    defaultValues: {},
  });


  const { userID, getUserName } = useGlobalContext();
  const [loading, setLoading] = useState(true);



  const fetchData = async () => {

    var ingData:Ingredient = { 
      id: 0, 
      idUser: userID, 
      unit: '', 
      name: '', 
      description: '', 
      price: 0 };

    if (pin_ingredientID) {
      try {
        ingData = await getIngredientByID(pin_ingredientID);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } 

    setValue("id", ingData.id);
    setValue("idUser", ingData.idUser);
    setValue("unit", ingData.unit);
    setValue("name", ingData.name);
    setValue("description", ingData.description);
    setValue("price", ingData.price);
    setLoading(false);

  };


  const onSubmit = async (data: Ingredient) => {
    await saveIngredient(data);
    if (onSubmitCallback) { onSubmitCallback();}
  };


  useEffect(() => {
    fetchData();
  }, [pin_ingredientID,setValue, userID]);


  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      user: {getUserName()}({userID})
      <label>
        Nom :
        <input  {...register("name")} />
      </label>
      <br />
      <label>
        Description :
        <input {...register("description")} />
      </label>
      <br />
      <label>
        Unité :
        <input  {...register("unit")} />
      </label>
      <br />
      <label>
        Prix :
        <input type="number" {...register("price")} />
      </label>
      <br />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default IngredientForm;








/*
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ingredients", userID] }); // Rafraîchir la liste
      alert("Ingrédient enregistré avec succès !");
    },
*/









/*

"use client";

import { getIngredientByID } from "@/actions/ingredientsActions";
import { Ingredient } from "@/utils/model";
import { useForm } from "react-hook-form";
import React, { useEffect, useState, useTransition } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useGlobalContext } from "@/context/globlaContext";
import { useRouter } from "next/navigation";



type IngredientFormProps = {
  fn_ingredient: (p_ingredient: Ingredient) => Promise<Ingredient>;
  pin_ingredientID?: number;
};

const IngredientForm = ({ fn_ingredient, pin_ingredientID }: IngredientFormProps) => {
  const { userID } = useGlobalContext();
  //const [ingredientID, setIngredientID] = useState(pin_ingredientID ?? 0;
  const [ingredientID, setIngredientID] = useState(pin_ingredientID ?? null);
  const queryClient = useQueryClient();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();



  console.log("ingredientID avant query:", ingredientID);

  // 🔄 Chargement de l'ingrédient
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["ingredient", ingredientID],
    queryFn: () => (ingredientID ? getIngredientByID(ingredientID) : null),
    enabled: Boolean(ingredientID),
  });


  console.log("isLoading:", isLoading);
  console.log("data:", data);
  console.log("isError:", isError);
  console.log("error:", error);



  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
    setValue, // Pour mettre à jour manuellement les valeurs après ajout
  } = useForm<Ingredient>();

  // ⚡ Remplir le formulaire avec les données chargées
  useEffect(() => {
    console.log("useeffect");
    if (data) {
      console.log("useEffect:",data);
      reset(data);
    }
  }, [data, reset]);

  // 📌 Soumission du formulaire
  const onSubmit = async (formData: Ingredient) => {
    startTransition(async () => {
      try {



        console.log("formData avant fn_ingredient:", formData); // Vérification de l'objet envoyé
  
        const savedIngredient: Ingredient = await fn_ingredient({ ...formData, idUser: userID,id: formData.id || 0, });
  
        console.log("Ingrédient enregistré (après fn_ingredient):", savedIngredient); // Vérification de l'objet retourné
  
        alert("Ingrédient enregistré");
  
        // Vérification de l'id
        if (savedIngredient.id === 0) {
          console.error("ID non généré, problème dans la sauvegarde");
        } else {
          // Mettre à jour l'ID dans le state local après la sauvegarde
          setIngredientID(savedIngredient.id); // Si c'est un nouvel ingrédient
        }
  
        // Mettre à jour la liste des ingrédients
        queryClient.invalidateQueries({ queryKey: ["ingredients", userID] });
  
        if (formData.id === 0) {
          // 🎯 Rediriger vers la page de modification après un ajout
        } else {
          queryClient.invalidateQueries({ queryKey: ["ingredient", ingredientID] });
        }
      } catch (err) {
        setError("root", { message: (err as Error).message });
      }
    });
  };




  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <p>Chargement...</p>}
      {isError && <p className="text-red-500">Erreur : {error?.message}</p>}

      <h2>{ingredientID === 0 ? "Ajouter un ingrédient" : "Modifier un ingrédient"}</h2>

      <label>Nom :</label>
      <input
        {...register("name", {
          required: "Ce champ est requis",
          maxLength: { value: 100, message: "Max 100 caractères" },
          minLength: { value: 3, message: "Min 3 caractères" },
        })}
        placeholder="Nom"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <label>Description :</label>
      <input {...register("description")} placeholder="Description" />
      {errors.description && <p className="text-red-500">{errors.description.message}</p>}

      <label>Prix :</label>
      <input
        type="number"
        {...register("price", { required: "Ce champ est requis", valueAsNumber: true })}
        placeholder="Prix"
        step="0.01"
      />
      {errors.price && <p className="text-red-500">{errors.price.message}</p>}

      <button type="submit" disabled={isPending} className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50">
        {isPending ? "En cours..." : "Enregistrer"}
      </button>

      {errors.root && <p className="text-red-500">{errors.root.message}</p>}
    </form>
  );
};

export default IngredientForm;




*/