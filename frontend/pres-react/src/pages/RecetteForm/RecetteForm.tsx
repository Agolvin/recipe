// import { useState } from "react";
// import Input from "./components/Input/Input";
// import "./App.css";
// import { useForm } from "react-hook-form";
// import { Link, Outlet, useLocation, useParams } from "react-router-dom";
// import Button from "./components/Button/Button";

import { Link, Outlet } from "react-router-dom";

//import { recette } from "../../data";
//import React, { useEffect } from "react";
/*
import { ListeRecipe } from "./utils";
import { useEffect, useState } from "react";

import { addRecipe } from "./api";
import Input from "../../components/Input/Input";
*/
//import { RecetteFormProps } from "./RecetteForm.types";
import { Recipe } from "../../../../../shared/models/recipe.model";


import { useForm, useFieldArray, Controller } from "react-hook-form";

import React from "react";

type DefaultValuesType = Recipe | { recette: Recipe };

const RecetteForm: React.FC<{ fn_recipe: (data: Recipe) => Promise<void>; defaultValues?: DefaultValuesType }> = ({ fn_recipe, defaultValues }) => {
  const processedDefaults: Recipe | undefined =
    defaultValues && "recette" in defaultValues
      ? (defaultValues as { recette: Recipe }).recette
      : defaultValues;

  const {
    control,
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<Recipe>({
    defaultValues: processedDefaults || {
      id: 0,
      name: "",
      description: "",
      steps: [{ name: "Etape 1", description: "Commencer la rectte" }],
      ingredientsQte: [],
    },
  });


  const onSubmit = async (data: Recipe) => {
    console.log(data);
    try {
      const id = processedDefaults?.id || 0;
      await fn_recipe({ ...data, id });
      setValue("name", "");
      setValue("description", "");
    } catch (error) {
      const err = error as Error;
      setError("root", { message: err.message });
    }
  };


/*
  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps", // Le nom du champ dans le formulaire
  });
*/


  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <h1>Name</h1>
      <input
        {...register("name", {
          required: {
            value: true,
            message: "Vous devez remplir ce champ",
          },
          maxLength: {
            value: 100,
            message: "Le nom ne doit pas dépasser 100 caractères",
          },
          minLength: {
            value: 5,
            message: "Trop court. 5 caractères minimum",
          },
        })}
        placeholder="Titre"
      />
      {errors.name && <p>{errors.name.message}</p>}




      <h1>Description</h1>
      <input
        {...register("description", {
          required: true,
        })}
        placeholder="Description"
      />
      {errors.description && <p>{errors.description.message}</p>}

      <h1>Steps (soon)</h1>

      <h1>Ingredients (soon)</h1>

      <button type="submit">Soumettre</button>
      {errors.root && <p>{errors.root.message}</p>}
    </form>
  );
};

export default RecetteForm;



/*

const RecetteForm: React.FC<RecetteFormProps> = ({ fn, defaultValues }) => {



const processedDefaults: Recipe | undefined = 
  defaultValues && "recette" in defaultValues
    ? (defaultValues as { recette: Recipe }).recette
    : defaultValues;
/*
const {
  register,
  handleSubmit,
  setValue,
  setError,
  formState: { errors },
} = useForm<Recipe>({
  defaultValues: processedDefaults || {
    id: 0,
    name: "",
    description: "",
    steps: [],
    ingredientsQte: [],
  },
});
const {
  register,
  handleSubmit,
  setValue,
  setError,
  formState: { errors },
} = useForm<Recipe>({
  defaultValues: processedDefaults || {
    id: 0,
    name: "",
    description: "",
    steps: [],
    ingredientsQte: [],
  },
});



/*
  const onSubmit = async (data: Recipe) => {
    //const onSubmit = async (data: FormSchema) => {
    console.log(data);
    try {
      await fn({ ...data, id: defaultValues?.id || "" });
      setValue("name", "");
      setValue("description", "");
    } catch (error) {
      const err = error as Error;
      setError("root", { message: err.message });
    }
  };


const onSubmit = async (data: Recipe) => {
  console.log(data);
  try {
    await fn({ ...data, id: defaultValues?.id || 0 });
    setValue("name", "");
    setValue("description", "");
  } catch (error) {
    const err = error as Error;
    setError("root", { message: err.message });
  }
};




  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", {
          required: {
            value: true,
            message: "Vous devez remplir ce champ",
          },
          maxLength: {
            value: 100,
            message: "Le nom ne doit pas depasser 100 caracteres",
          },
          minLength: {
            value: 5,
            message: "Trop court. 5 carac min svp",
          },
        })}
        placeholder="Titre"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <input
        {...register("description", {
          required: true,
        })}
        placeholder="description"
      />
      <button>Submit</button>

      {errors.description && <p>{errors.description.message}</p>}
      {errors.root && <p>{errors.root.message}</p>}
    </form>
  );
};

export default RecetteForm;


*/