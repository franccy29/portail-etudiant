import React, { useState } from "react";

import { AtelierExercisesStyled } from "./styles/AtelierExercises.styles.js";

type Props = {
  atelierId: number;
};

const data: { id: number; img: string; reponse: string; question: string } = {
  id: 2,
  reponse: "reponse",
  img: "lien d'image",
  question: "la question est ici",
};

const AtelierExercises: React.FC<Props> = () => {
  const [answer, setAnswer] = useState<string>("");
  const [tromper, setTromper] = useState<string>("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setAnswer(e.target.value);
  };

  const onSubmit = (): void => {
    if (answer === data.reponse) {
      setTromper("réussis");
    } else {
      setTromper("oui");
    }
  };

  return (
    <AtelierExercisesStyled>
      <h2>{data.question}</h2>
      <p>ici une image avec ce lien la: {data.img}</p>
      <p>ca cest lexercise avec le id: {data.id}</p>
      {tromper === "oui" ? (
        <p>Ce n'est pas la reponse, try again!</p>
      ) : tromper === "réussis" ? (
        <p>bravo! je sais pas encore quoi faire quand cest réussis</p>
      ) : null}
      <input onChange={handleChange} />
      <button onClick={onSubmit}>vérifie!</button>
    </AtelierExercisesStyled>
  );
};

export default AtelierExercises;
