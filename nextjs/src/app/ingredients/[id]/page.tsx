
'use client';

//import { getIngredient } from '@/app/api/ingredients/api';
import { Ingredient } from '@/utils/model';
//import { useRouter } from "next/router";
//import { useRouter } from 'next/navigation';
//import { useSearchParams } from "next/navigation";
//import { use, useEffect, useState } from 'react';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getIngredientByID } from '@/actions/ingredientsActions';





//export default async function IngredientPage({ params }: { params: { id: string } }) {
export default function IngredientPage() {

  const param = useParams() // Récupère l'ID depuis l'URL
  const id:number = Number(useParams().id); // Récupère l'ID depuis l'URL
  console.log("IngredientPage: ID récupéré depuis useParams id   :", id);
  console.log("IngredientPage: ID récupéré depuis useParams param:", param);

  const [ingredient, setIngredient] = useState<Ingredient | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchIngredient() {
      setLoading(true);
      const result = await getIngredientByID(id);

      if (result.error) {
        setError(result.error);
      } else {
        setIngredient(result.data?? null);  //si undefined, on remplace par null
      }
      setLoading(false); 
    }

    fetchIngredient();
  }, [id]);

  if (loading) {
    return <p>⏳ Chargement...</p>;
  }

  if (error) {
    return <p>⚠️ Erreur : {error}</p>;
  }

  if (!ingredient) {
    return <p>❌ Ingrédient introuvable.</p>;
  }

  return (
    <div>
      <h2>🧂 Titre: {ingredient.name}</h2>
      <p>Description: {ingredient.description}</p>
      <p>User: {ingredient.idUser}</p>
      <p>Prix: {ingredient.price}</p>
      <p>Unitté: {ingredient.unit}</p>
    </div>
  );










}

/*
  const [data, setData] = useState<{ id: number; name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    
    fetch(`/api/ingredients/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur de récupération");
        return res.json();
      })
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, [id]);

  if (isLoading) return <p>Chargement...</p>;
  if (isError || !data) return <p>Erreur : ingrédient introuvable</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>ID : {data.id}</p>
    </div>
  );

*/










/*

  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [data, setData] = useState<{ id: number; name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);



  const searchParams = useSearchParams();
  const idParam = searchParams.get("id"); // Retourne une string ou null

  //const idIng: number | undefined = idParam ? Number(idParam) : undefined;
  const idIng: number = idParam ? Number(idParam) : 0;



  //const router = useRouter();

  console.log("composant Ingredient()", );


  //const idIng:number|undefined = Array.isArray(router.query.id) ? Number(router.query.id[0]) : Number(router.query.id); // Récupération de l'ID depuis l'URL



 // const { id: idParam } = useParams(); 
 // const id = Number(idParam); 

 if(typeof idIng == undefined)
  return(
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <p> Impossible de récupérer l'ingrédient</p>
          </main>
        </div>
    );


/*
  if (isNaN(idIng)) {
    return <p>ID invalide dans l'URL.</p>;
  }
*/


/*
  console.log("Id récupéré depuis l'URL:", idIng);
  console.log("fonction recette id:", idIng);

  const RELOAD_QUERY_OPTIONS = {
    cacheTime: 0, // Supprimer les données immédiatement après le démontage
    staleTime: 0, // Considérer les données comme périmées immédiatement
    refetchOnWindowFocus: true, // Recharger les données si la fenêtre est focalisée
    refetchOnMount: true, // Force la requête à chaque montage
  } as const;

  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["ingredient", idIng], // Inclure l'ID dans la clé
    queryFn: () => getIngredient(idIng),//, // Appeler l'API avec l'ID
    ...RELOAD_QUERY_OPTIONS,
  });


  if (isLoading) {
    return <p>Loading ingredient {idIng}...</p>;
  }
  if (isError) {
    return (
      <div>
        <p>{(error as Error).message}</p>
        <button onClick={() => refetch()}>Recharger</button>
      </div>
    );
  }
  if (!data) {
    return <p>Pas de données disponibles</p>;
  }
console.log("Données recipes retournées par l'API: ", data);






  //const { cpt, incrementCpt } = useIngredientContext();
  return (
    <>
      <h1>Détail de l'ingrédient (id: {idIng})</h1>
      <h2>Titre:{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>Prix: {data.price}</p>

      <p>Unité: coming soon...</p>
      
    </>
  );





//  <button onClick={incrementCpt}>Btn test context cpt: {cpt}</button>




      //<p>Unité: {Units[data.unit].name} ({Units[data.unit].symbol})</p>





  
  //const router = useRouter();


/*




  console.log('IngredientPage');

  const router = useRouter();

  const idIng:number|undefined = Array.isArray(router.query.id) ? Number(router.query.id[0]) : Number(router.query.id); // Récupération de l'ID depuis l'URL


  const ing:Ingredient|undefined = getIngredient(idIng);

*/


  //const unwrappedParams = await params;




  //const unwrappedParams = use(params);

    //const { id } = params;




    /*
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState<Recipe | null>(null);
  
    useEffect(() => {
      if (id) {
        fetch(`/api/recipes/${id}`)
          .then((res) => res.json())
          .then((data: Recipe) => setRecipe(data));
      }
    }, [id]);
  
    if (!recipe) return <div>Loading...</div>;

*/


/*

    const ingTEST:Ingredient = {
        id: 0,
        idUser: 0,
        unit: '',
        name: 'Ing test',
        description: 'Description ingredient',
        price: 0
    };
*/

/*

if(typeof ing == undefined)
  return(
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <p> Impossible de récupérer l'ingrédient</p>
          </main>
        </div>
    );


return(
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

            <p> Détails ingrédient standard de test</p>

            <div>
                <h1>{ing.name ?? "zhgfd"}</h1>
                <p>{ing.description}</p>
            </div>
    
      </main>
    </div>


*/




//);






/*
function useQuery(arg0: any): { isLoading: any; data: any; isError: any; error: any; refetch: any; } {
  throw new Error('Function not implemented.');
}

function useIngredientContext(): { cpt: any; incrementCpt: any; } {
  throw new Error('Function not implemented.');
}

*/





/*

export default function IngredientPage({ params }: { params: { id: string } }) {
    console.log('IngredientPage');
    const router = useRouter();

    //const { id } = router.query;
    const { id } = params;




    /*
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState<Recipe | null>(null);
  
    useEffect(() => {
      if (id) {
        fetch(`/api/recipes/${id}`)
          .then((res) => res.json())
          .then((data: Recipe) => setRecipe(data));
      }
    }, [id]);
  
    if (!recipe) return <div>Loading...</div>;

*/
/*



    let ingTEST:Recipe = {
        id: 0,
        idUser: 0,
        test: false,
        ingredient: false,
        commentaire: 'comment',
        name: 'Nom de test',
        description: 'Description test',
        steps: [],
        ingredientsQte: []
    };





  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
 



       
            <p> Détails d'un ingrédient standard de test</p>


            <div>
                <h1>{ingTEST.name}</h1>
                <p>{ingTEST.description}</p>
            </div>
        

   
      </main>
    </div>
  );
}
*/