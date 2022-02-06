import React from "react";

import { CreeTexteStyled } from "./styles/CreeTexte.styles.js";

type Props = {
  question: React.Dispatch<React.SetStateAction<string>>;
  reponse: React.Dispatch<React.SetStateAction<string | number>>;
};

const CreeTexte: React.FC<Props> = () => {
  return (
    <CreeTexteStyled>
      <p>cest quoi la reponse?</p>
      <input></input>
    </CreeTexteStyled>
  );
};

export default CreeTexte;
