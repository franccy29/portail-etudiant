import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Acceuil from "../components/Acceuil";
import Notes from "../components/Notes";
import Ateliers from "../components/Ateliers";
import Capsules from "../components/Capsules";
import Tests from "../components/Tests";
import NotesList from "../components/NotesList";
import AtelierExercises from "../components/AtelierExercises";

import { HomePageStyled } from "./styles/HomePage.styles.js";

type Props = {};

const HomePage: React.FC<Props> = () => {
  const [page, setPage] = useState<string>("ACCUEIL");
  const [matiere, setMatiere] = useState<string>("");
  const [atelier, setAtelier] = useState<number>(0);

  return (
    <HomePageStyled>
      <NavBar navigator={setPage} />
      {page === "ACCUEIL" && <Acceuil />}
      {page === "NOTES" && (
        <Notes navigator={setPage} matiereChoose={setMatiere} />
      )}
      {page === "NotesList" && <NotesList matiere={matiere} />}
      {page === "ATELIERS" && (
        <Ateliers navigator={setPage} AtelierChoisis={setAtelier} />
      )}
      {page === "OuvrirAtelier" && <AtelierExercises atelierId={atelier} />}
      {page === "CAPSULES" && <Capsules />}
      {page === "TESTS" && <Tests />}
    </HomePageStyled>
  );
};

export default HomePage;
