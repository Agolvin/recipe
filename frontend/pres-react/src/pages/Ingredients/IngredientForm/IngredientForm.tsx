import { Ingredient, UnitEnum, Units } from "../../../../../../shared/models/recipe.model";
import { useForm } from "react-hook-form";
import React from "react";
import { useIngredientContext } from "../context/IngredientContext";

type IngredientFormProps = {
  fn_ingredient : any;
  defaultValues : any;
}

const IngredientForm = ({ fn_ingredient, defaultValues }:IngredientFormProps):React.JSX.Element => {
  const processedDefaultsIngredient: Ingredient | undefined =
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
    defaultValues: processedDefaultsIngredient || {
        id: 0,
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
      await fn_ingredient({ ...data, id });
      setValue("name", "");
      setValue("description", "");
      setValue("price", 0);
      setValue("unit", UnitEnum.GRAM);
    } catch (error) {
      const err = error as Error;
      setError("root", { message: err.message });
    }
  };


  const { cpt, incrementCpt } = useIngredientContext();

  return (
    <>
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      
      <h2>Name:</h2>
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
        placeholder="Nom"
      />
      {errors.name && <p>{errors.name.message}</p>}


      <h2>Description:</h2>
      <input
        {...register("description", {
          required: true,
        })}
        placeholder="Description"
      />
      {errors.description && <p>{errors.description.message}</p>}



      <h2>Prix:</h2>
      <input
        type="number"
        {...register("price", {
          required: true,
          valueAsNumber: true,
          //value : data.price
        })}
        placeholder="Prix"
        step="0.01"  // Autoriser entiers ou décimaux mais précision limitée au centime 
      />
      {errors.price && <p>{errors.price.message}</p>}




      <h2>Unité de mesure:</h2>

      <select
    {...register("unit", {
      required: "Please select a unit.",
    })}
  >
    <option value="">Select a unit</option>
    {Object.values(UnitEnum).map((unitKey) => (
      <option key={unitKey} value={unitKey}>
        {Units[unitKey].name} ({Units[unitKey].symbol})
      </option>
    ))}
  </select>
  {errors.unit && <p>{errors.unit.message}</p>}

      <button type="submit">Soumettre</button>
      {errors.root && <p>{errors.root.message}</p>}
    </form>
    
    <button onClick={incrementCpt}>Incrémenter {cpt}</button>
    </>
  );
};

export default IngredientForm;


