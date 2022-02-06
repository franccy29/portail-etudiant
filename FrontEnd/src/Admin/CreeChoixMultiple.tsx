import React from "react";

import { CreeChoixMultipleStyled } from "./styles/CreeChoixMultiple.styles.js";

type Props = {
  question: React.Dispatch<React.SetStateAction<string>>;
  reponse: React.Dispatch<React.SetStateAction<string | number>>;
  choix: React.Dispatch<React.SetStateAction<string[]>>;
};

const CreeChoixMultiple: React.FC<Props> = () => {
  return (
    <CreeChoixMultipleStyled>
      <p>cest quoi les choix?(sellectionne la reponse)</p>
      <p>
        faire les choix avec des input qui radio dot pour choisir lequel est le
        bon
      </p>
    </CreeChoixMultipleStyled>
  );
};

export default CreeChoixMultiple;
