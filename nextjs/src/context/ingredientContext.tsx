"use client";

import { createContext, useState, useContext, ReactNode } from "react";
//import { Recipe } from "@/utils/model";
//import { Ingredient } from "@/utils/model";


//import { useGlobalContext } from "@/context/globlaContext";
//const { userID } = useGlobalContext();


interface IngredientContextType {

//    ingredients: Ingredient[] | undefined,
//    isLoading: boolean,
//    error: unknown,
//    refetch: () => void,


    initUser: (pinUserID:number) => void;
    getUserNameByID: (ID_User:number) => string;
    getUserName: () => string;
}



export const IngredientContext = createContext<IngredientContextType | undefined>(undefined);







export const useIngredientContext = () => {
    const context = useContext(IngredientContext);
    if(!context){
            throw new Error('Erreur initialisation context global');
    }
    return context;
}

export const IngredientProvider = ({ children }: { children: ReactNode }) => {
    const [userID, setUserID] = useState<number>(0);
    const initUser = (pinUserID:number) => {setUserID(pinUserID);
};



const getUserName = () => {
    switch (userID) {
        case 1:
            return "TEST";
        case 2:
            return "Adrien";
        case 3:
            return "Alex";
        case 4:
            return "Akis";
        default:
            return "Unknown User";
    }
};

const getUserNameByID = (ID_User:number) => {
    switch (ID_User) {
        case 1:
            return "TEST";
        case 2:
            return "Adrien";
        case 3:
            return "Alex";
        case 4:
            return "Akis";
        default:
            return "Unknown User";
    }
};


    return (
      <IngredientContext.Provider value={{ initUser,getUserName,getUserNameByID }}>
        {children}
      </IngredientContext.Provider>
    );
};

