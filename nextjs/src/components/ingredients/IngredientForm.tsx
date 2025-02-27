

"use client";

import React, { useState, useEffect } from 'react';
import { getIngredientByID } from "@/actions/ingredientsActions";


interface IngredientFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  ingredientID?: number;
}

const IngredientForm = ({ initialData, onSubmit, ingredientID }: IngredientFormProps) => {
  const [data, setData] = useState(initialData || {});
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);
  //const [error, setError] = useState(null);

  console.log("id reçu par le formulaire:", ingredientID);

  const fetchData = async () => {
    if (ingredientID) {
      try {
        const response = await getIngredientByID(ingredientID);
        //setData(response.data);
        setData(response);
      } catch (error) {
        console.error(error);
        //setError(error);

      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [ingredientID]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : </div>;
    //return <div>Erreur : {error.message}</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" name="name" value={data.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Unité :
        <input type="text" name="unit" value={data.unit} onChange={handleChange} />
      </label>
      <br />
      <label>
        Prix :
        <input type="number" name="price" value={data.price} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default IngredientForm;




/*
import { useState, useEffect } from 'react';

const IngredientEditPage = () => {
  const [ingredient, setIngredient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIngredient = async () => {
      const ingredientData = await getIngredientByID(ingredientID);
      setIngredient(ingredientData);
      setLoading(false);
    };
    fetchIngredient();
  }, [ingredientID]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>Édition de l'ingredient</h1>
      <IngredientForm initialData={ingredient} onSubmit={handleSubmit} />
    </div>
  );
};

*/



/*

import { Ingredient } from "@/utils/model";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/globlaContext";

type IngredientFormProps = {
  onSubmit: (data: Ingredient) => void;
  initialData?: Ingredient;
  //fn_ingredient: (p_ingredient: Ingredient) => Promise<Ingredient>;
};

const IngredientForm = ({ onSubmit, initialData }: IngredientFormProps) => {
  const { userID } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, setValue, reset } = useForm<Ingredient>({
    defaultValues: initialData || {
      id: 0,
      idUser: userID,
      unit: "",
      name: "",
      description: "",
      price: 0,
    },
  });

  useEffect(() => {
    if (initialData) {
      // Remplir le formulaire avec les données d'édition
      setValue("name", initialData.name);
      setValue("description", initialData.description);
      setValue("price", initialData.price);
      setValue("unit", initialData.unit);
    }
  }, [initialData, setValue]);



const handleOptimisticUpdate = async (data: Ingredient) => {
  setIsSubmitting(true);
  try {
    // Simuler une mise à jour optimiste
    const updatedIngredient = initialData
      ? { ...data, id: initialData.id }
      : { ...data, id: 0 }; 
    onSubmit(updatedIngredient);
    reset(updatedIngredient);
  } catch (error) {
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <form onSubmit={handleSubmit(handleOptimisticUpdate)} className="grid gap-4">
      <label>Nom</label>
      <input {...register("name", { required: "Nom est requis" })} />

      <label>Description</label>
      <input {...register("description")} />

      <label>Unit</label>
      <input {...register("unit")} />

      <label>price</label>
      <input {...register("price")} />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enregistrement en cours..." : "Enregistrer"}
      </button>
    </form>
  );
};

export default IngredientForm;
*/



/*
"use client";

import { Ingredient } from "@/utils/model";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useGlobalContext } from "@/context/globlaContext";

type IngredientFormProps = {
  
  onSubmit: (data: Ingredient) => void;
  initialData?: Ingredient;
  //fn_ingredient: (p_ingredient: Ingredient) => Promise<Ingredient>;
};

const IngredientForm = ({ onSubmit, initialData }: IngredientFormProps) => {

  const { userID } = useGlobalContext();

  const { register, handleSubmit, setValue } = useForm<Ingredient>({
    defaultValues: initialData || { 
      id: 0,
      idUser: userID,  
      unit: "",      
      name: "",
      description: "", 
      price: 0,   
    },
  });


  useEffect(() => {
    if (initialData) {
      // Remplir le formulaire avec les données d'édition
      setValue("name", initialData.name);
      setValue("description", initialData.description);
      setValue("price", initialData.price);
      setValue("unit", initialData.unit);
    }
  }, [initialData, setValue]);



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
    <label>Nom</label>
    <input {...register("name", { required: "Nom est requis" })} />


    <label>Description</label>
    <input {...register("description")} />


    <label>Unit</label>
    <input {...register("unit")} />


    <label>price</label>
    <input {...register("price")} />


    <button type="submit">Enregistrer</button>
  </form>
  );
};

export default IngredientForm;

*/




/*
import React from 'react';
import { useForm } from 'react-hook-form';
//import { useMutation } from 'react-query';
import { useMutation,useQueryClient  } from '@tanstack/react-query';
import { saveIngredient } from '@/actions/ingredientsActions';
import { Ingredient } from '@/utils/model';



const IngredientForm = () => {
  const { register, handleSubmit } = useForm();
  const { mutate, status } = useMutation(saveIngredient);

  const isLoading = status === 'loading';

  const handleFormSubmit = async (data: Ingredient) => {
    mutate({ variables: data });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="grid gap-4">
      <label>Nom</label>
      <input {...register("name", { required: "Nom est requis" })} />

      <label>Description</label>
      <input {...register("description")} />

      <label>Unit</label>
      <input {...register("unit")} />

      <label>Prix</label>
      <input type="number" {...register("price")} />

      <button type="submit" disabled={isLoading}>Enregistrer</button>
    </form>
  );
};

export default IngredientForm;

*/







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