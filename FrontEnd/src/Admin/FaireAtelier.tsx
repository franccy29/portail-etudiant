import React, { useState } from "react";
import CreeChoixMultiple from "./CreeChoixMultiple";
import CreeTexte from "./CreeTexte";

import { FaireAtelierStyled } from "./styles/FaireAtelier.styles.js";

type Props = {
  envoyerQuestion: (
    type: number,
    question: string,
    reponse: string | number,
    choix?: string[],
    img?: string | undefined
  ) => void;
};

const FaireAtelier: React.FC<Props> = ({ envoyerQuestion }) => {
  const [type, setType] = useState<number>(1);
  const [question, setQuestion] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [reponse, setReponse] = useState<string | number>(1);
  const [choix, setChoix] = useState<string[]>(["", "", "", ""]);
  const [showButton, setShowButton] = useState<boolean>(true);

  const handleTypeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setType(Number(e.target.value));
  };

  const saveExercise = () => {
    console.log(choix);
    if (choix[0] && image) {
      envoyerQuestion(type, question, reponse, choix, image);
    } else if (choix[0] && !image) {
      envoyerQuestion(type, question, reponse, choix);
    } else if (!choix[0] && image) {
      envoyerQuestion(type, question, reponse, undefined, image);
    }
    setShowButton(false);
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
      <input onChange={(e) => setQuestion(e.target.value)}></input>
      <p>tu met une image?(un lien live)</p>
      <input onChange={(e) => setImage(e.target.value)}></input>
      {type === 1 ? (
        <CreeTexte reponse={setReponse} />
      ) : (
        <CreeChoixMultiple reponse={setReponse} choix={setChoix} />
      )}
      {showButton && (
        <button onClick={saveExercise}>sauvegarder cette exercise</button>
      )}
    </FaireAtelierStyled>
  );
};

export default FaireAtelier;
