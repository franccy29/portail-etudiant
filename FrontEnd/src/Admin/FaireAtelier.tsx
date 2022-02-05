import React, { useState } from "react";

import { FaireAtelierStyled } from "./styles/FaireAtelier.styles.js";

type Props = {};

const FaireAtelier: React.FC<Props> = () => {
  const [type, setType] = useState<number>(1);

  const handleTypeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setType(Number(e.target.value));
  };

  return (
    <FaireAtelierStyled>
      <h1>faire un atelier</h1>
      <select value={type} onChange={handleTypeChange}>
        <option value={1}>texte</option>
        <option value={2}>Choix de reponse</option>
      </select>
    </FaireAtelierStyled>
  );
};

export default FaireAtelier;
