
/*
"use client";

import { getIngredientByID } from "@/actions/ingredientsActions";
import { Ingredient } from "@/utils/model";
import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useTransition } from "react";
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

  const [isPending, startTransition] = useTransition();

  // 🔄 Chargement de l'ingrédient si `ingredientID` est fourni (mode update)
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["ingredient", ingredientID],
    queryFn: () => (ingredientID && ingredientID !== "0" ? getIngredientByID(Number(ingredientID)) : null),
    enabled: Boolean(ingredientID && ingredientID !== "0"),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm<Ingredient>();

  // ⚡ Mettre à jour les valeurs du formulaire quand les données sont disponibles
  useEffect(() => {
    if (data !== undefined || pin_ingredientID === 0) {
      reset({
        id: data?.id ?? 0,
        idUser: userID,
        name: data?.name ?? "",
        description: data?.description ?? "",
        price: data?.price ?? 0,
        unit: data?.unit ?? "",
      });
    }
  }, [data, reset, pin_ingredientID, userID]);

  // 📌 Soumission du formulaire
  const onSubmit = (formData: Ingredient) => {
    startTransition(async () => {
      try {
        await fn_ingredient({ ...formData, idUser: userID });
        alert("Ingrédient enregistré");

        // 🔄 Mise à jour du cache pour afficher la dernière version
        queryClient.invalidateQueries({ queryKey: ["ingredients", userID] });

        // Réinitialiser le formulaire après succès
        reset({
          id: 0,
          idUser: userID,
          name: "",
          description: "",
          price: 0,
          unit: "",
        });
      } catch (err) {
        setError("root", { message: (err as Error).message });
      }
    });
  };

  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <p>Chargement...</p>}
      {isError && <p className="text-red-500">Erreur : {error?.message}</p>}

      <h2>{pin_ingredientID === 0 ? "Ajouter un ingrédient" : "Modifier un ingrédient"}</h2>

      <label>Nom :</label>
      <input
        {...register("name", {
          required: "Ce champ est requis",
          maxLength: { value: 50, message: "Max 50 caractères" },
          minLength: { value: 3, message: "Min 3 caractères" },
        })}
        placeholder="Nom"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <label>Description (optionelle):</label>
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






/*

"use client";

import { getIngredientByID } from "@/actions/ingredientsActions";
import { Ingredient } from "@/utils/model";
import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useTransition } from "react";
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

  const [isPending, startTransition] = useTransition();



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
      alert("Ingrédient enregistré");
      // Invalider le cache pour recharger les données, à retirer si nécessaire
      if (ingredientID && ingredientID !== "0") {
        queryClient.invalidateQueries({ queryKey: ["ingredient", ingredientID] });
      }

    } catch (err) {
      setError("root", { message: (err as Error).message });
    }
  };

  //if (isLoading) return <p>Chargement des données...</p>;
  //if (isError) return <p>Erreur : {error?.message}</p>;

  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>

    {isLoading && <p>Loading...</p>}
    {isError && <p>Erreur : {error?.message}</p>}

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

      <button type="submit">{isPending? "En cours..." : "Enregistrer"}</button>

      {errors.root && <p>{errors.root.message}</p>}
    </form>
  );
};

export default IngredientForm;

*/

//<button type="submit">{pin_ingredientID === 0 ? "Ajouter" : "Modifier"}</button>






/*
'use client';

import React from "react";
import { Ingredient, UnitEnum, Units } from "@/utils/model";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "@/context/globlaContext";

const { userID,getUserName } = useGlobalContext();


type IngredientFormProps = {
  fn_ingredient : any;
  defaultValues : any;
}

const IngredientForm = ({ fn_ingredient, defaultValues }:IngredientFormProps):React.JSX.Element => {

  const { userID } = useGlobalContext();

  const processedDefaultsIngredient: Ingredient | undefined =
    defaultValues && "ingredient" in defaultValues
      ? (defaultValues as { ingredient: Ingredient }).ingredient
      : defaultValues;

  const {
    //control,
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<Ingredient>({
    defaultValues: processedDefaultsIngredient || {
        id: 0,
        idUser: userID,
        unit: UnitEnum.GRAM,
        name: "",
        description: "", 
        price: 0  
    },
  });

  const onSubmit = async (data: Ingredient) => {
    console.log("onSubmit",data);
    try {
      const id = processedDefaultsIngredient?.id || 0;
      await fn_ingredient({ ...data, id, idUser:userID });
      setValue("name", "");
      setValue("description", "");
      setValue("price", 0);
      setValue("unit", UnitEnum.GRAM);
    } catch (error) {
      const err = error as Error;
      setError("root", { message: err.message });
    }
  };




  return (
    <h1>Formulaire ingredient soon HERE (add/update)</h1>
  );




};

export default IngredientForm;

*/











/*

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface IngredientFormProps {
  initialData?: { name: string }; // Données initiales pour la modification
  onSubmit: (data: { name: string }) => Promise<void>; // Fonction pour gérer la soumission
}

export default function IngredientForm({ initialData, onSubmit }: IngredientFormProps) {
  const [name, setName] = useState(initialData?.name || '');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit({ name });
      router.push('/ingredients'); // Redirige vers la liste après succès
    } catch (error) {
      console.error('Erreur lors de la soumission :', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="name">Nom de l'ingrédient :</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded p-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={isLoading}
      >
        {isLoading ? 'Chargement...' : 'Soumettre'}
      </button>
    </form>
  );
}

*/





