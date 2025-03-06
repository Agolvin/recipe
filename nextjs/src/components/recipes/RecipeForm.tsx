


/* 
//exemple de codeium

import React, { useState, useEffect } from 'react';
import { getRecipeByID, saveRecipe } from "@/actions/recipesActions";
import { Recipe } from '@/utils/model';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from "@/context/globlaContext";
import { IngredientQte } from '@/utils/model';



interface RecipeFormProps {
  pin_recipeID: number;
  onSubmit?: () => void;
}

const RecipeForm = ({ pin_recipeID, onSubmit: onSubmitCallback }: RecipeFormProps) => {
  const { register, handleSubmit, setValue } = useForm<Recipe>({
    defaultValues: {},
  });

  const { userID } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (pin_recipeID) {
        try {
          const response: Recipe = await getRecipeByID(pin_recipeID);
          setValue("id", response.id);
          setValue("idUser", response.idUser);
          setValue("name", response.name);
          setValue("description", response.description);
          setValue("ingredientsQte", response.ingredientsQte);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        const newRecipe = {
          id: 0,
          idUser: userID,
          name: '',
          description: '',
          ingredients: [],
          ingredientsQte: [],
        };
        setValue("id", newRecipe.id);
        setValue("idUser", newRecipe.idUser);
        setValue("name", newRecipe.name);
        setValue("description", newRecipe.description);
        setValue("ingredientsQte", newRecipe.ingredientsQte);
        setLoading(false);
      }
    };

    fetchData();
  }, [pin_recipeID, setValue, userID]);

  const onSubmit = async (data: Recipe) => {
    await saveRecipe(data);
    if (onSubmitCallback) { onSubmitCallback();}
  };

  const handleAddIngredient = () => {
    const newIngredient = {
      ingredient: { id: 0, name: '', description: '', price: 0 },
      quantity: 0,
    };
    setValue("ingredientsQte", [...getValue("ingredientsQte"), newIngredient]);
  };


  const handleRemoveIngredient = (index: number) => {
    const ingredients = getValue("ingredientsQte");
    ingredients.splice(index, 1);
    setValue("ingredientsQte", ingredients);
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
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
        Ingrédients :
        <ul>
          {getValue("ingredients").map((ingredientsQte:IngredientQte[], index:number) => (
            <li key={index}>
              <select {...register(`ingredientsQte.${index}.ingredient.id`)} >
                <option value="0">Sélectionnez un ingrédient</option>
                {ingredientsQte.map((ingredient:IngredientQte) => (
                  <option value={ingredient.ingredient.id}>{ingredient.ingredient.name}</option>
                ))}
              </select>
              <input type="number" {...register(`ingredientsQte.${index}.quantity`)} />
              <button type="button" onClick={() => handleRemoveIngredient(index)}>Supprimer</button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAddIngredient}>Ajouter un ingrédient</button>
      </label>
      <br />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default RecipeForm;

*/

 