import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Acceuil from "../components/Acceuil";
import Notes from "../components/Notes";
import Ateliers from "../components/Ateliers";
import Capsules from "../components/Capsules";
import Tests from "../components/Tests";
import AtelierSemaine from "../components/AtelierSemaine";

import { HomePageStyled } from "./styles/HomePage.styles.js";

type Props = {};

const HomePage: React.FC<Props> = () => {
  const [page, setPage] = useState<string>("ACCUEIL");
  return (
    <HomePageStyled>
      <NavBar navigator={setPage} />
      {page === "ACCUEIL" && <Acceuil />}
      {page === "NOTES" && <Notes />}
      {page === "ATELIERS" && <Ateliers navigator={setPage} />}
      {page === "CAPSULES" && <Capsules />}
      {page === "TESTS" && <Tests />}
      {page === "AtelierSemaine" && <AtelierSemaine />}
    </HomePageStyled>
  );
};

export default HomePage;
