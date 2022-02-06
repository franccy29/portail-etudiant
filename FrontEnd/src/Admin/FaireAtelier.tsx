import React, { useState } from "react";
import CreeChoixMultiple from "./CreeChoixMultiple";
import CreeTexte from "./CreeTexte";

import { FaireAtelierStyled } from "./styles/FaireAtelier.styles.js";

type Props = {};

const FaireAtelier: React.FC<Props> = () => {
  const [type, setType] = useState<number>(1);
  const [question, setQuestion] = useState<string>("");
  const [reponse, setReponse] = useState<string | number>("");
  const [choix, setChoix] = useState<string[]>([]);

  const handleTypeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setType(Number(e.target.value));
  };

  return (
    <FaireAtelierStyled>
      <h1>faire un atelier</h1>
      <div>
        <select value={type} onChange={handleTypeChange}>
          <option value={1}>texte</option>
          <option value={2}>Choix de reponse</option>
        </select>
      </div>
      <p>c'est quoi la question?</p>
      <input></input>
      <p>tu met une image?(un lien live)</p>
      <input></input>
      {type === 1 ? (
        <CreeTexte question={setQuestion} reponse={setReponse} />
      ) : (
        <CreeChoixMultiple
          question={setQuestion}
          reponse={setReponse}
          choix={setChoix}
        />
      )}
    </FaireAtelierStyled>
  );
};

export default FaireAtelier;
