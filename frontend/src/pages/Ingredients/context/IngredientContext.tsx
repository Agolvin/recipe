
import { createContext, useState, useContext, ReactNode } from "react";
//import {  Ingredient, UnitEnum } from "../../../../shared/front.model";







//import {  Ingredient } from "../../../../shared/front.model";

interface Ingredient {      //A utiliser pour MAJ de structure / reprise de données
    id: number;
    idUser: number;           //NEW
    unit: UnitEnum;           //énumération des clé possibles pour les unités
    name: string;
    description: string; 
    price: number;            //à l'unité
  }
  
  
  enum UnitEnum {
    GRAM = "GRAM",
    LITRE = "LITRE",
    KILOGRAM = "KILOGRAM",
    PIECE = "PIECE",
  }
  
  const Units: Record<UnitEnum, { name: string; symbol: string }> = {
    [UnitEnum.GRAM]: { name: "gramme", symbol: "g" },
    [UnitEnum.LITRE]: { name: "litre", symbol: "L" },
    [UnitEnum.KILOGRAM]: { name: "kilogramme", symbol: "kg" },
    [UnitEnum.PIECE]: { name: "pièce", symbol: "pc" },
  };







  






// Définition des types pour le contexte
interface IngredientsContextType {
    //ingredient_test: Ingredient,
    cpt: number,
   // setCpt: () => void; 
    incrementCpt: () => void;
    //setIngredients: (ingredients: Ingredient[]) => void;
    ingredients:Ingredient[];
    //loadUserIngredients: () => Promise<void>;
    loadUserIngredients: () => void;
}


export const IngredientContext = createContext<IngredientsContextType | undefined>(undefined);

export const useIngredientContext = () => {
    const context = useContext(IngredientContext);
    if(!context){
            throw new Error('Erreur initialisation context');
    }
    return context;
}

export const IngredientProvider = ({ children }: { children: ReactNode }) => {
    const [cpt, setCount] = useState<number>(0);
    const [ingredients] = useState<Ingredient[]>([]); 

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



const loadUserIngredients = () => {

  //setCount((prevCount) => prevCount + 1);

};


    return (
      <IngredientContext.Provider value={{ cpt, incrementCpt,ingredients,loadUserIngredients}}>
        {children}
      </IngredientContext.Provider>
    );
};

