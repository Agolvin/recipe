
import { createContext, useState, useContext, ReactNode } from "react";
//import {  Ingredient, UnitEnum } from "../../../../shared/front.model";

//import {  Ingredient, UnitEnum } from "../../../../shared/front.model";

// Définition des types pour le contexte
interface IngredientsContextType {
    //ingredient_test: Ingredient,
    cpt: number,
    // setCpt: () => void; acces direct sans seter
    incrementCpt: () => void;
    //setIngredients: (ingredients: Ingredient[]) => void;
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

    //const [cpt, setCptState] = useState<number>(0);
/*
    const incrementCpt = () => {
        (cpt = cpt + 1); // Incrémente le compteur
    };
*/
    return (
      <IngredientContext.Provider value={{ cpt, incrementCpt }}>
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
