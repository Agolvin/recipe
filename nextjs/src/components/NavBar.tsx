import React from "react";
import Link from "next/link";

//const NavBar: React.FC = ({ ...props }) => {
const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 border-b w-full h-24">
      <ul className="flex justify-evenly items-center h-full">
        <li>
          <Link href="/accueil">Accueil</Link>
        </li>
        <li>
          <Link href="/recettes">Liste recettes</Link>
        </li>
        <li>
          <Link href="/ingredients">Liste ingredients</Link>
        </li>
        <li>
          <Link href="/tools">outils</Link>
        </li>
        <li>
          <Link href="/test">page de test</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
