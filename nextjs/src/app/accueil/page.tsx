

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

<div>Utilisateur actuel: {getUserName()}({userID})</div>

<div style={{ display: "flex", gap: "10px" }}>
Sélectionner un utilisateur:
<button onClick={() => initUser(1)} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">{getUserNameByID(1)}</button>
<button onClick={() => initUser(2)} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">{getUserNameByID(2)}</button>
<button onClick={() => initUser(3)} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">{getUserNameByID(3)}</button>
<button onClick={() => initUser(4)} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">{getUserNameByID(4)}</button>
</div>


 Migration Node/React vers fullstack NextJS (15.1.4) <br />

 Prochaine MAJ (recettes?): début avril? <br />


<p>
Fonctionnalités disponnibles: <br />
- Utilisateurs: Sélection (Aucun sécurité ni mdp pour le moment) <br />
- Gestion données par utilisateur <br />
- Ingrédients: Liste/ajout/maj <br />
- Recettes: Liste <br />
</p> 

<p> 
A venir (relativement) rapidement: <br />
- Recettes: ajout/maj/delete... <br />
</p> 

<p> 
Plus tard (à définir): <br />
- Sécurisation par mdp? <br />
- Optimisation (optimistic update?) <br />
- Ingrédients: changer gestion unité :  sélection gr/kg/L...?? <br />
- Selection d'ingrédients par recette <br />
- Impression recette <br />
- Et tout le reste <br />


</p>  



</div>

  );
}
