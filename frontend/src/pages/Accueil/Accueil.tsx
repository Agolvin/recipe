
import { useGlobalContext } from "../GloblaContext";


//import { useIngredientContext } from "../Ingredients/context/IngredientContext";


function AccueilPage() {
    
/*

  const CurrentUser = ({Pin_userID}) => {
    const renderUserInfo = () => {
      switch (Pin_userID) {
        case 1:
          return "Admin";
        case 2:
          return "Moderator";
        case 3:
          return "Guest";
        default:
          return "Unknown User";
      }
    };

*/

const UserName = (Pin_userID:number) => {
  switch (Pin_userID) {
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






const { userID,initUser,getUserName } = useGlobalContext();
//const { cpt, incrementCpt } = useIngredientContext();
//<button onClick={incrementCpt}>Btn test context cpt: {cpt}</button>
    return (
      <>

<br />
<br />
<br />
<br />
<br />
<br />
<br />

<h1>Sélectionner un utilisateur:</h1>

<button onClick={() => initUser(1)}>{UserName(1)}</button>
<button onClick={() => initUser(2)}>{UserName(2)}</button>
<button onClick={() => initUser(3)}>{UserName(3)}</button>
<button onClick={() => initUser(4)}>{UserName(4)}</button>

<h1>Utilisateur actuel: {getUserName()}({userID})</h1>

<br />
<br />
<br />
<br />
<br />
<br />
<br />


<h1>Attention!</h1>
<br />
Première version à utiliser/tester sans la moindre garantie <br />
3 utilisateurs de test et le "TEST" utilisable par tous<br />
ni mot de passe ni sécurité pour l'instant , ne pas poluer les autre utilisateurs svp <br />
<br />
2 environnements (bientot?) dispo pour vous: (pour l'instant un seul environnement dont je vais essayer de garder les données)<br />
<ul>
<li>- Prod: les données seront conservées et migrées au fur et à mesure des dev (sauf bug majeur...)</li>
<li>- Preprod: copie de la prod pour test, si vous voulez tout casser/poluer c'est ici qu'il faut le faire</li>
</ul>
<br />


<b>Perte de données possible! Mais j'essayerai de ne pas perdre les données de prod.</b>  <br /> 
<b>Les données de preprod seront écrasées par celle de prod à la demande ou quand j'aurai besoin</b> <br /> 
<br />
<h1>V0.1: Bienvenue </h1>
Etat global actuel: <br />
FrontEnd OK, BackEnd HS <br />
En test local: Ingrédient: OK sauf bug refresh MAJ <br />
Recettes: EC <br />



<br/>
<br/>
<br/>
<br/>
<h1>Historique versions</h1>

<br/>
<br/>
<h2>V0.1 (version actuelle)</h2>
Janvier 2025<br />
toute première version de test <br />
FrontEnd OK, BackEnd HS <br />
A peu près rien de fonctionnel en prod<br />
Non livrée pour les testeurs <br />
<h3>Ingrédients</h3>
Ajout sélection unité ok<br />
Ajout coût/prix ingrédient ok<br />
Liste ok<br/>
Détail ok <br/>
Ajout ok <br/>
Suppression HS (à mettre ou pas?)<br />
Modification BUG maj affichage<br/>
Unité de mesure(g/kg/L/Unité) ok (en dur)<br/>
<h3>Recettes</h3>
liste incomplet <br />
modif incomplet <br />
ajout HS <br />
suprreson HS <br />
<h3>Autres</h3>
hébergement Site React vercel OK <br />
integration Units en model ok enum + tableau associatif ok<br />
ajout de context en test sur ingredients <br />
hebergement vercel EC <br />
creation branches (master/preprod/dev) ok <br />

<br />
<br />
<br />
<br />
<h1>Updates planifiées</h1>
Les dates et fonctionnalités présentées ci-dessous sont purement spéculatives. <br />


<br/>
<br/>
<h2>V0.2</h2>
Février 2025
Première version pour les testeurs?
<h3>Ingrédients</h3>
idem v0.1 (sans context)
<h3>Recettes</h3>
tout passe par le context?
<h3>Autres</h3>
hébergement API!!!<br/>
ajout de context user pour simuler utilisateurs ok <br />
context global pour users ok<br />
combo sur page d'accueil pour choisir utilisateur ok <br />
ajout filtre id user sur les recettte/ing EC <br />
ajout UserID dans les données ok<br />
gestion filtre pour données user EC<br />
.gitattributes ok pour differencier les bases?? A verfier <br />

<br/>
<br/>
<h2>V0.3</h2>
Closed Beta <br />
Mars 2025
<h3>Ingrédients</h3>
passage en context?
<h3>Recettes</h3>
Liste ok?<br/>
Détails (titre,descrition,étapes)<br/>
Ajout<br/>
<h3>Autres</h3>

<br/>
<br/>
<h2>V0.4</h2>
Avril 2025
<h3>Ingrédients</h3>
Page de selection pour ajout <br />
<h3>Recettes</h3>
Ajout liste ingrédients avec quantité (qté modifiable dans la recette)<br/>
bouton de suppression ingredient d'une recette <br />
Méthode de calcul du coût en ingrédients<br/> 
Duplication de recettes <br />
<h3>Autres</h3>

<br/>
<br/>
<h2>V0.5</h2>
Mai 2025
<h3>Ingrédients</h3>
Ajout de filtres pour la sélection d'ingrédients (nom, autres?) <br />
<h3>Recettes</h3>
ajout coche pour utiliser une recette comme ingrédient d'une autre <br />
<h3>Autres</h3>

<br/>
<br/>
<h2>V0.6</h2>
Juin 2025
<h3>Ingrédients</h3>
<h3>Recettes</h3>
Export pdf/word des recettes pour impressions <br />
impression d'une recette: inclure optionnellement impression des sous recette <br />
<h3>Autres</h3>

<br/>
<br/>
<h2>V0.7</h2>
Juillet 2025
<h3>Ingrédients</h3>
<h3>Recettes</h3>
<h3>Autres</h3>
Refonte graphique parceque oui pour l'instant c'est moche (tailwind)<br />

<br/>
<br/>
<h2>V0.8</h2>
<h3>Ingrédients</h3>
<h3>Recettes</h3>
<h3>Autres</h3>

<br/>
<br/>
<h2>V0.9</h2>
<h3>Ingrédients</h3>
<h3>Recettes</h3>
<h3>Autres</h3>

<br/>
<br/>
<h2>V1.0</h2>
Mise en prod! <br />
été 2025? <br />
<h3>Ingrédients</h3>
full privé <br />
<h3>Recettes</h3>
choix public/privé <br />
systeme de partage? <br />
<h3>Autres</h3>
ajout de compte <br />
gestion mail/mdp <br />
sécuriser API par tockens <br />


<br/>
<br/>
<h2>V2.0</h2>
mySQL update ?? <br />
invisble pour user (sauf performances?) <br />
Dans longtemps <br />
<h3>Ingrédients</h3>
<h3>Recettes</h3>
<h3>Autres</h3>
Migration BDD JSON vers MySQL? <br />
Classes typeScript pour recette/ingredients?<br />
Liaisons entre front et MySQL par methodes de classe??<br />


<br/>
<br/>
<h2>V3.0</h2>
Suivi recette <br />
<h3>Ingrédients</h3>
cochage des ingrédient pesés <br />
<h3>Recettes</h3>
suivi interactif de réalisation <br />
<h3>Autres</h3>


<br/>
<br/>
<h2>V4.0</h2>
Android update <br />
<h3>Ingrédients</h3>
<h3>Recettes</h3>
<h3>Autres</h3>





<br/>
<br/>
<br/>
<br/>
<h1>idées et questions en vrac</h1>
autoriser suprression d'ingredient?? (inactivation?) <br />
ajouter indication de temps de travail dans les étapes/recettes? EC bdd<br/>
autoriser un unique niveau de sous recette? plusieurs? <br />
comment situer les sous recette dans une recette principale? dans des étapes spécifiques? <br />
Trouver un nom au site? <br />
Version mobile android? (tablette?) (V4)<br />
Systeme de suivi de réalisation pour cocher ce qui est fait au fur et à mesure? (V3)<br />
Gestionde stock/inventaire des ingredients? liste des recette faisable avec le stock actuel? <br />
Note de difficulté sur les recette? <br />
Gestion materiel necessaire pour une recette? <br />
Taille min/max de chaque champ? min 5 trop petit (ex: Lait), passé à 3 ok?<br />
ajouter gestion de session utilisateur EC version tmp <br />
<br/>
<br/>
<br/>
<br/>
<br/>

















<h1>Fonctionnalitées</h1>

<table>
  <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Détail</th>
      <th scope="col">Etat</th>
      <th scope="col">Date livraison</th>
    </tr>
  </thead>
  <tbody>

  <tr>
      <th scope="row">Users</th>
      <td>gestion</td>
      <td>test version temp</td>
      <td>01/2025</td>
    </tr>
  <tr>
      <th scope="row">Ingrédients</th>
      <td>Liste</td>
      <td>OK</td>
      <td>01/2025</td>
    </tr>
    <tr>
      <th scope="row">Ingrédients</th>
      <td>Ajout</td>
      <td>OK</td>
      <td>01/2025</td>
    </tr>
    <tr>
      <th scope="row">Ingrédients</th>
      <td>Modif</td>
      <td>OK bug de refresh</td>
      <td>01/2025</td>
    </tr>
    <tr>
      <th scope="row">Ingrédients</th>
      <td>Delete</td>
      <td>/!\ A definir</td>
      <td>XX</td>
    </tr>


  <tr>
      <th scope="row">Recette</th>
      <td>Liste</td>
      <td>En test</td>
      <td>01/2025</td>
    </tr>
    <tr>
      <th scope="row">Recette</th>
      <td>Ajout</td>
      <td>Inexistant</td>
      <td>XX</td>
    </tr>
    <tr>
      <th scope="row">Recette</th>
      <td>Modif</td>
      <td>OK Incomplet pb de refresh?</td>
      <td>XX</td>
    </tr>
    <tr>
      <th scope="row">Recette</th>
      <td>Delete</td>
      <td>BUG, à definir, ajouter message de confirmation</td>
      <td>??</td>
    </tr>
    <tr>
      <th scope="row">Recette</th>
      <td>Liste etapes</td>
      <td>Base OK, front inexistant</td>
      <td>02/25?</td>
    </tr>
    <tr>
      <th scope="row">Recette</th>
      <td>Liste ingrédients</td>
      <td>Base OK, front inexistant</td>
      <td>02/25?</td>
    </tr>
  </tbody>
</table>

<br />
<br />
<br />
<br />
<br />




<h1>Merci</h1>
À Virtrice pour tes cours et cette fameuse clé usb https://github.com/Vitrixxl <br /> 
À Florin pour ton aide depuis mon changement de taff <br />

<br />
<br />
<br />
<br />

      </>
    );
  }
  
  export default AccueilPage;
  