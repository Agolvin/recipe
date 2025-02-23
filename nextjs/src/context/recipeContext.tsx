
export{};

/*

1️⃣ Mutation avec React Query : gestion dynamique des mises à jour

Les mutations sont utilisées pour modifier des données côté serveur sans recharger la page (ajouter, modifier, supprimer). Elles déclenchent des Server Actions, puis mettent à jour le cache React Query pour éviter des requêtes inutiles.

✅ Idéal pour les opérations ponctuelles (ex: soumission d’un formulaire, suppression d’un élément).
⛔ Ne stocke pas les données globalement, il faut utiliser useQuery pour les récupérer après une mutation.
2️⃣ Contexte React : état global partagé

Un contexte est utilisé pour stocker des données accessibles globalement dans l'application, sans avoir besoin de les passer en props à chaque composant.

✅ Idéal pour des états globaux persistants (ex: utilisateur connecté, préférences, thème).
⛔ Moins adapté pour des requêtes dynamiques, car il ne gère pas automatiquement les revalidations comme React Query.
3️⃣ Comment combiner les deux ?

    Stocker les données principales avec React Query (useQuery) → chargement auto, gestion du cache.
    Modifier les données avec des mutations (useMutation + Server Actions).
    Utiliser un contexte pour stocker des infos transversales (ex: userID, auth, filtres, préférences…).

📌 Exemple concret :

    Un context global stocke le userID.
    Un context des ingrédients pourrait utiliser useQuery pour stocker la liste des ingrédients en cache.
    Une mutation est utilisée pour ajouter un ingrédient → elle met à jour le cache sans passer par le contexte.

👉 Verdict : React Query gère les données, le Contexte stocke les infos transversales. 🚀
Vous avez dit :
donc le contexte fais le gros du travail en chargeant tout au debut puis les mutations se cchargent de faires les petits ajustements par exemple ajout ou modification d'un enregistrement?
ChatGPT a dit :

Exactement ! 🚀
🔹 Le Contexte : le "stockage global"

    Il charge les données principales au début (ex: useQuery pour récupérer tous les ingrédients d’un utilisateur).
    Il évite de refaire des requêtes inutiles en maintenant les données en mémoire.
    Il est utilisé par plusieurs composants sans avoir à passer les données en props.

👉 Exemple :
Au chargement de l'application, un useQuery dans le contexte récupère tous les ingrédients d’un utilisateur et les stocke.
🔹 Les Mutations : les "mises à jour en temps réel"

    Elles servent à ajouter, modifier ou supprimer des données côté serveur.
    Elles déclenchent une Server Action, puis mettent à jour le cache React Query pour éviter un nouveau chargement complet.
    Elles peuvent rafraîchir les données stockées dans le contexte après une modification.

👉 Exemple :
Si un utilisateur ajoute un ingrédient, une mutation envoie la requête, met à jour le cache React Query, et le contexte récupère automatiquement la nouvelle liste sans recharger toute la page.
🔹 Résumé : la combinaison parfaite 🔥

1️⃣ Le contexte stocke les données globales et évite les appels inutiles à la BDD.
2️⃣ Les mutations mettent à jour les données sans recharger la page.
3️⃣ React Query synchronise tout automatiquement pour éviter les incohérences.

👉 Tu as une app ultra fluide et optimisée ! 🚀
Vous avez dit :
tu pourrait me faire un schémas qui résume le role de chacun et qui fait appel a qui?
ChatGPT a dit :

Oui, voici un schéma qui illustre le rôle de chaque élément et leurs interactions :

🟦 Contexte (Context API)
🔹 Stocke les données globales chargées avec useQuery.
🔹 Permet aux composants d’accéder aux données sans re-fetch.
🔹 Évite de propager les données via les props.

⬇️ (Charge les données au démarrage avec useQuery)

🟩 React Query
🔹 Gère le cache des données.
🔹 Évite les requêtes inutiles.
🔹 Met à jour automatiquement les composants quand les données changent.

⬇️ (Envoie les requêtes GET et synchronise les données)

🟨 Server Actions
🔹 Récupère les données depuis la BDD.
🔹 Fait les traitements côté serveur.
🔹 Évite d'exposer les requêtes SQL/API côté client.

⬇️ (Charge les données et envoie les mises à jour)

🟥 Mutations (useMutation)
🔹 Modifie les données (ajout/suppression/mise à jour).
🔹 Met à jour le cache de React Query.
🔹 Déclenche un re-fetch ou modifie les données en local.

⬇️ (Appelle une Server Action pour modifier les données en BDD)

🗂️ Base de données (ex: Upstash Redis)
🔹 Stocke les données.
🔹 Répond aux requêtes des Server Actions.


*/




/*
"use client";

import { createContext, useState, useContext, ReactNode } from "react";
//import { Recipe } from "@/utils/model";
//import { Ingredient } from "@/utils/model";

import { Recipe } from "@/utils/model";

import { useGlobalContext } from "@/context/globlaContext";
import { getRecipesUser } from "@/actions/recipesActions";



const { userID } = useGlobalContext();



interface RecipeContextType {

//    ingredients: Ingredient[] | undefined,
//    isLoading: boolean,
//    error: unknown,
//    refetch: () => void,


//    initUser: (pinUserID:number) => void;
//    getUserNameByID: (ID_User:number) => string;
//    getUserName: () => string;

    recipesUserCt: Recipe[];
    isLoading: boolean;
    error: Error | null;

    addRecipe:(recipe:Recipe) => 




    refetch: () => void; // Permet de rafraîchir les données si besoin

    getRecipeUserCt: () => Recipe[];


}



export const RecipeContext = createContext<RecipeContextType | undefined>(undefined);



export const getRecipeUserCt = () => {

    //const userRecipes:Recipe[] = getred;


 //   userRecipesCt = getRecipesUser(userID);

    //return userRecipesCt;
    


    
    
 //   const context = useContext(RecipeContext);
 //   if(!context){
 //       throw new Error('Erreur initialisation context global');
 //   }
 //   return context;




}




export const useRecipeContext = () => {
    const context = useContext(RecipeContext);
    if(!context){
        throw new Error('Erreur initialisation context recipe');
    }
    return context;
}

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
    const [userID, setUserID] = useState<number>(0);
    const initUser = (pinUserID:number) => {setUserID(pinUserID);
};












    return (
      <RecipeContext.Provider value={{ refetch,getRecipeUserCt }}>
        {children}
      </RecipeContext.Provider>
    );
};




*/