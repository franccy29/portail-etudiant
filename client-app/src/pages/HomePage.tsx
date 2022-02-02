import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Acceuil from "../components/Acceuil";
import Notes from "../notesDeCours/Notes";
import Ateliers from "../ateliers/Ateliers";
import Capsules from "../capsules/Capsules";
import Tests from "../tests/Tests";
import NotesList from "../notesDeCours/NotesList";
import AtelierExercises from "../ateliers/AtelierExercises";

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
