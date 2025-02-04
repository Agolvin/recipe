

'use client';


import { useGlobalContext } from "@/context/globlaContext";
import Image from "next/image";

export default function Home() {




  const { userID,initUser,getUserName,getUserNameByID } = useGlobalContext();


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        



        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />


       
<p> Page Accueil NextJS </p>


<h1>Utilisateur actuel: {getUserName()}({userID})</h1>
<h1>Sélectionner un utilisateur:</h1>
<div style={{ display: "flex", gap: "10px" }}>
<button onClick={() => initUser(1)}>{getUserNameByID(1)}</button>
<button onClick={() => initUser(2)}>{getUserNameByID(2)}</button>
<button onClick={() => initUser(3)}>{getUserNameByID(3)}</button>
<button onClick={() => initUser(4)}>{getUserNameByID(4)}</button>
</div>
<p> Migration Node/React vers fullstack NextJS (15.1.4) en cours</p>

<p> 
Fonctionnalités disponnibles: <br />
- Ingrédients: Liste <br />
- Recettes: Liste <br />
</p> 

<p> 
A venir rapidement: <br />
- Ingrédients: Ajout/Modification <br />
</p> 

<p> 
Un peu après: <br />
- Utilisateurs: Sélection <br />
- Gestion données par utilisateur <br />
</p>   
        
  
    </div>
  );
}
