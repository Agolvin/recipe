

import { Recipe } from "../../../../shared/front.model";

export interface RecetteContextType {
    recipesCt: Recipe[];
    isLoadingCt: Boolean;
    isErrorCt: Boolean;
    errorCt: Error | null;
    getUserRecipesCt: () => Promise<Recipe[]>;
}


