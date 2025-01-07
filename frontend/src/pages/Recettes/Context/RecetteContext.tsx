
//import { createContext, useState, useContext, ReactNode } from "react";
import { createContext, useContext, ReactNode } from "react";
import { Recipe } from "../../../../shared/front.model";
import API_BASE_URL from "../../../../src/utils/config";

import { useGlobalContext } from "../../GloblaContext"

interface RecetteContextType {
    getUserRecipesCt: () => Promise<Recipe[]>;
}

export const RecetteContext = createContext<RecetteContextType | undefined>(undefined);

export const useRecetteContext = () => {
    const context = useContext(RecetteContext);
    if(!context){
        throw new Error('Erreur initialisation context recette');
    }
    return context;
}


const RecetteProvider = ({ children }: { children: ReactNode }) => {
    const { userID } = useGlobalContext();
    const getUserRecipesCt = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/recette/getbyuser/${userID}`);
            if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data as Recipe[];
        } catch (err) {
            const error = err as Error;
            throw error;
        }
    };
    return (
        <RecetteContext.Provider value={{ getUserRecipesCt }}>
          {children}
        </RecetteContext.Provider>
      );
};


export default RecetteProvider;
    
    







/*
    const [userIDCt, setUserID] = useState<number>(0);
    const initUser = (pinUserID:number) => {setUserID(pinUserID);
*/

    //const { userID,getUserName } = useGlobalContext();
    //const { userID } = useGlobalContext();
  //  getUserRecipesCt();
    //loadUserRecipesCt();

//};


/*

const getUserRecipesCt = async () => {
    const { userID } = useGlobalContext();
    try {
        const response = await fetch(`${API_BASE_URL}/recette/getbyuser/${userID}`);
        if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data as Recipe[];
    } catch (err) {
        const error = err as Error;
        throw error;
    }
};
*/

/*
const loadUserRecipesCt = async (pinUserID:number) => {
    try {
        const response = await fetch(`${API_BASE_URL}/recette/getbyuser/${pinUserID}`);
        if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data as Recipe[];
    } catch (err) {
        const error = err as Error;
        throw error;
    }
};
*/



