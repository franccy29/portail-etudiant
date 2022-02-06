import React from "react";

import { CreeTexteStyled } from "./styles/CreeTexte.styles.js";

type Props = {
  reponse: React.Dispatch<React.SetStateAction<string | number>>;
};

const CreeTexte: React.FC<Props> = ({ reponse }) => {
  return (
    <CreeTexteStyled>
      <p>cest quoi la reponse?</p>
      <input onChange={(e) => reponse(e.target.value)}></input>
    </CreeTexteStyled>
  );
};

export default CreeTexte;
