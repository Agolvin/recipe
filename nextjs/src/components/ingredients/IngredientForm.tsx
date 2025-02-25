"use client";

import { Ingredient } from "@/utils/model";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "@/context/globlaContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getIngredientByID, saveIngredient } from "@/actions/ingredientsActions";
import React from "react";

type IngredientFormProps = {
  onSubmit?: () => void; // Rendu optionnel
  ingredientID?: number; // ID de l'ingrédient à modifier (optionnel)
};

const IngredientForm = ({ onSubmit, ingredientID }: IngredientFormProps) => {
  const { userID } = useGlobalContext();
  const queryClient = useQueryClient();



  // Récupération de l'ingrédient si en mode édition
  const { data: ingredient, isLoading } = useQuery({
    queryKey: ["ingredient", ingredientID],
    queryFn: () => (ingredientID ? getIngredientByID(ingredientID) : null),
    enabled: !!ingredientID, // Ne charge que si ingredientID existe
    staleTime: 0, // Force toujours un refetch immédiat
    placeholderData: undefined, // Évite l'affichage des anciennes données
  });


  const { register, handleSubmit, setValue } = useForm<Ingredient>({
    defaultValues: {
      id: ingredientID || 0,
      idUser: userID,
      unit: "",
      name: "",
      description: "",
      price: 0,
    },
  });

  // Met à jour le formulaire lorsque l'ingrédient est chargé
  React.useEffect(() => {
    if (ingredient) {
      setValue("name", ingredient.name);
      setValue("description", ingredient.description);
      setValue("price", ingredient.price);
      setValue("unit", ingredient.unit);
    }
  }, [ingredient, setValue]);



/*
  // Mutation pour sauvegarder l’ingrédient
  const mutation = useMutation({
    mutationFn: saveIngredient,
    onSettled: async () => {
      await queryClient.refetchQueries({ queryKey: ["ingredients", userID] });
      onSubmit?.(); // Redirige seulement après la mise à jour de la liste
    },
    onError: () => {
      alert("Erreur lors de l'enregistrement de l'ingrédient.");
    },
  });
*/
/*
const mutation = useMutation({
  mutationFn: saveIngredient,
  onMutate: async (newIngredient) => {
    // Annule les requêtes en cours sur "ingredients"
    await queryClient.cancelQueries({ queryKey: ["ingredients", userID] });

    // Sauvegarde l'état actuel du cache
    const previousIngredients = queryClient.getQueryData(["ingredients", userID]);

    // Met à jour immédiatement le cache avec la version modifiée
    queryClient.setQueryData(["ingredients", userID], (old: Ingredient[] | undefined) => {
      if (!old) return [];
      return old.map((item) => (item.id === newIngredient.id ? newIngredient : item));
    });

    // Retourne l'état précédent en cas d'erreur
    return { previousIngredients };
  },
  onError: (err, _, context) => {
    // Annule l'update optimiste si l'API renvoie une erreur
    queryClient.setQueryData(["ingredients", userID], context?.previousIngredients);
    alert("Erreur lors de l'enregistrement.");
  },
  onSettled: () => {
    // Force un refetch après la mutation (si besoin)
    queryClient.invalidateQueries({ queryKey: ["ingredients", userID] });
    onSubmit?.();
  },
});
*/

const mutation = useMutation({
  mutationFn: saveIngredient,
  onMutate: async (newIngredient) => {
    await queryClient.cancelQueries({ queryKey: ["ingredients", userID] });

    // Sauvegarde l’état actuel
    const previousIngredients = queryClient.getQueryData(["ingredients", userID]);

    // Mise à jour instantanée du cache avec la version modifiée
    queryClient.setQueryData(["ingredients", userID], (old: Ingredient[] = []) => {
      const exists = old.find((item) => item.id === newIngredient.id);
      if (exists) {
        return old.map((item) => (item.id === newIngredient.id ? newIngredient : item));
      }
      return [...old, newIngredient]; // Ajoute s'il n'existait pas (cas d'un nouvel ingrédient)
    });

    return { previousIngredients };
  },
  onError: (_, __, context) => {
    queryClient.setQueryData(["ingredients", userID], context?.previousIngredients);
  },
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ["ingredients", userID] });
    onSubmit?.();
  },
});











  // Gestion de l’envoi du formulaire
  const handleFormSubmit = (data: Ingredient) => {
    mutation.mutate(data);
  };

  if (isLoading) return <p>Chargement...</p>;

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

      <button type="submit" disabled={mutation.isPending}>Enregistrer</button>
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

//import { getIngredientByID } from "@/actions/ingredientsActions";
import { Ingredient } from "@/utils/model";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useGlobalContext } from "@/context/globlaContext";
//import { useQuery, useQueryClient } from "@tanstack/react-query";
//import { useGlobalContext } from "@/context/globlaContext";
//import { useRouter } from "next/navigation";


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