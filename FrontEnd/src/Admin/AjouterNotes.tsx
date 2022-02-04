import React from "react";

import { AjouterNotesStyled } from "./styles/AjouterNotes.styles.js";

type Props = {
  navigator: React.Dispatch<React.SetStateAction<string>>;
};

const AjouterNotes: React.FC<Props> = ({ navigator }) => {
  return (
    <AjouterNotesStyled>
      <h1>ajoute des notes de cours</h1>
      <p onClick={() => navigator("home")}>retour au menu</p>
      <p>
        faire un formulaire qui demande la matiere, si cest un pdf ou un video,
        avoir le titre aussi et pt description, pas sur
      </p>
    </AjouterNotesStyled>
  );
};

export default AjouterNotes;
