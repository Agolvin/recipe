
import { createContext, useState, useContext, ReactNode } from "react";
//import {  Ingredient, UnitEnum } from "../../../../shared/front.model";

import {  Ingredient } from "../../../../shared/front.model";

// Définition des types pour le contexte
interface IngredientsContextType {
    //ingredient_test: Ingredient,
    cpt: number,
   // setCpt: () => void; 
    incrementCpt: () => void;
    //setIngredients: (ingredients: Ingredient[]) => void;
    ingredients:Ingredient[];
}


export const IngredientContext = createContext<IngredientsContextType | undefined>(undefined);

export const useIngredientContext = () => {
    const context = useContext(IngredientContext);
    if(!context){
            throw new Error('Erreur initialisation context');
    }
    return context;
}

export const IngredientProviderTEST = ({ children }: { children: ReactNode }) => {
    const [cpt, setCount] = useState<number>(0);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]); 
    


    //const [ingredients, setIngredients] = useState<Ingredient[]>([]);

   /* const ingredient_test:Ingredient = {
        id: 0,
        unit: UnitEnum.GRAM,
        name: "Test context name",
        description: "Test context desc",
        price: 666,
      };

    const cpt:number = 1;
*/
const incrementCpt = () => {
    setCount((prevCount) => prevCount + 1);
};

    return (
      <IngredientContext.Provider value={{ cpt, incrementCpt,ingredients }}>
        {children}
      </IngredientContext.Provider>
    );
};




/*
// Provider pour le contexte
export const IngredientsProvider = ({ children }: { children: ReactNode }) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  return (
    <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
      {children}
    </IngredientsContext.Provider>
  );
};
*/
