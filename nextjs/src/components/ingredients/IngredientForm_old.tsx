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





