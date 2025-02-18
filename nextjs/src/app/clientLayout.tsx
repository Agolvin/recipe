"use client";

import { GlobalProvider } from "@/context/globlaContext";
import { IngredientProvider } from "@/context/ingredientContext";
import { RecipeProvider } from "@/context/recipeContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return  <IngredientProvider>
              <RecipeProvider>
                  <GlobalProvider>{children}</GlobalProvider>
              </RecipeProvider>
          </IngredientProvider>;
}