import { Ingredient } from "../../../../../../shared/models/recipe.model";


export interface IngredientFormProps {
  fn: (data: {
    ingredient:Ingredient;
  }) => Promise<void>;
  defaultValues:
    | {
        ingredient:Ingredient;
      }
    | undefined; // | = OU donc le type est soit FormSchema soit undefined ce qui fait que le param est optionnel pour le formulaire
}

