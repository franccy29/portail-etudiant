import React from "react";

import { ModifierNotesStyled } from "./styles/ModifierNotes.styles.js";

type Props = {
  navigator: React.Dispatch<React.SetStateAction<string>>;
};

const ModifierNotes: React.FC<Props> = ({ navigator }) => {
  return (
    <ModifierNotesStyled>
      <h1>MODIF Notes</h1>
      <p onClick={() => navigator("home")}>retour au menu</p>
      <p>show tout les notes avec loption modifier</p>
    </ModifierNotesStyled>
  );
};

export default ModifierNotes;
