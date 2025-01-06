
import { createContext, useState, useContext, ReactNode } from "react";

interface GlobalContextType {
    userID: number,
    initUser: (pinUserID:number) => void;
    getUserName: () => string;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if(!context){
            throw new Error('Erreur initialisation context global');
    }
    return context;
}

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
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

    return (
      <GlobalContext.Provider value={{ userID, initUser,getUserName }}>
        {children}
      </GlobalContext.Provider>
    );
};

