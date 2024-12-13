
import { Ingredient } from "../../../../../shared/models/recipe.model";


import { useForm, useFieldArray, Controller } from "react-hook-form";



import React from "react";

type DefaultValuesType = Ingredient | { ingredient: Ingredient };

const IngredientForm: React.FC<{ fn: (data: Ingredient) => Promise<void>; defaultValues?: DefaultValuesType }> = ({ fn, defaultValues }) => {
  const processedDefaults: Ingredient | undefined =
    defaultValues && "ingredient" in defaultValues
      ? (defaultValues as { ingredient: Ingredient }).ingredient
      : defaultValues;

  const {
    control,
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<Ingredient>({
    defaultValues: processedDefaults || {
        id: 0,
        unit: "",
        unitName: "",
        name: "",
        description: "", 
        price: 0  
    },
  });


  const onSubmit = async (data: Ingredient) => {
    console.log(data);
    try {
      const id = processedDefaults?.id || 0;
      await fn({ ...data, id });
      setValue("name", "");
      setValue("description", "");
    } catch (error) {
      const err = error as Error;
      setError("root", { message: err.message });
    }
  };


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




      <button type="submit">Soumettre</button>
      {errors.root && <p>{errors.root.message}</p>}
    </form>
  );
};

export default IngredientForm;

