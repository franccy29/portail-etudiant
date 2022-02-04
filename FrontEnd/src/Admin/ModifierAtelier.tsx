import React from "react";

import { ModifierAtelierStyled } from "./styles/ModifierAtelier.styles.js";

type Props = {
  navigator: React.Dispatch<React.SetStateAction<string>>;
};

const ModifierAtelier: React.FC<Props> = ({ navigator }) => {
  return (
    <ModifierAtelierStyled>
      <h1>MODIF ATELIER</h1>
      <p onClick={() => navigator("home")}>retour au menu</p>
      <p>
        show tout les ateliers qui apres peuvent ouvrir en paquet de questions
        qui sont modifiable ou deletable
      </p>
    </ModifierAtelierStyled>
  );
};

export default ModifierAtelier;
