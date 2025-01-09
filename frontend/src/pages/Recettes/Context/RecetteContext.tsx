
//import { createContext, useState, useContext, ReactNode } from "react";
import { createContext, useContext, ReactNode,useState } from "react";
import { Recipe } from "../../../../shared/front.model";
import API_BASE_URL from "../../../../src/utils/config";
import { useGlobalContext } from "../../GloblaContext"
import { RecetteContextType } from "./Types"

export const RecetteContext = createContext<RecetteContextType | undefined>(undefined);

export const useRecetteContext = () => {
    const context = useContext(RecetteContext);
    if(!context){
        console.log('Erreur initialisation context recette');
        throw new Error('Erreur initialisation context recette');
    }
    return context;
}

export const RecetteProvider = ({ children }: { children: ReactNode }) => {
    
    const [recipesCt, setRecipes] = useState<Recipe[]>([]);
    const [isLoadingCt, setIsLoading] = useState<boolean>(false);
    const [isErrorCt, setIsError] = useState<boolean>(false);
    const [errorCt, setError] = useState<Error | null>(null);

    const { userID } = useGlobalContext();

    


    //remplacer par loadRecipes et ajouter une getRecipe qui renvoir le contextType du context recipe??
    const getUserRecipesCt = async () => {

        console.log('getUserRecipesCt')

        setRecipes([])
        setIsLoading(true)
        setIsError(false)
        setError(null)

        try {
            const response = await fetch(`${API_BASE_URL}/recette/getbyuser/${userID}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
        
            const data = await response.json();
            setRecipes(data as Recipe[])
            console.log(data);
            return data as Recipe[];
            } catch (err) {
                setIsError(true)
                const error = err as Error;
                setError(error)
                throw error;
            } finally {
                setIsLoading(false);
            }


/*
        console.log('getUserRecipesCt')
        try {
            const response = await fetch(`${API_BASE_URL}/recette/getbyuser/${userID}`);
            if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        return data as Recipe[];
        } catch (err) {
            const error = err as Error;
            throw error;
        }
*/

    };

/*
    const isErrorCt =  false;
    const errorCt =  "";
    const isLoadingCt =  false;
    const recipesCt =  Promise<[]>;
*/


    return (
        <RecetteContext.Provider value={{ recipesCt,isLoadingCt,isErrorCt,errorCt,getUserRecipesCt }}>
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



