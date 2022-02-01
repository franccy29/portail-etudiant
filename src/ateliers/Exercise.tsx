import React, { useState } from "react";
import ChoixMultiple from "./ChoixMultiple";

import { ExerciseStyled } from "./styles/Exercise.styles.js";

type Props = {
  key: number;
  id: number;
  img: string;
  reponse: string | number;
  question: string;
  type: number;
  choix: string[] | undefined;
  reussis: (id: number) => void;
};

const Exercise: React.FC<Props> = ({
  id,
  img,
  reponse,
  question,
  type,
  choix,
  reussis,
}) => {
  const [answer, setAnswer] = useState<string>("");
  const [tromper, setTromper] = useState<string>("");
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setAnswer(e.target.value);
  };

  const onSubmit = (): void => {
    if (answer === reponse || value === reponse) {
      setTromper("réussis");
      reussis(id);
    } else {
      setTromper("oui");
    }
  };

  return (
    <ExerciseStyled>
      <h2>{question}</h2>
      <p>ici une image avec ce lien la: {img}</p>
      <p>ca cest lexercise avec la key: {id}</p>
      {tromper === "oui" ? (
        <p>Ce n'est pas la reponse, try again!</p>
      ) : tromper === "réussis" ? (
        <p>bravo! je sais pas encore quoi faire quand cest réussis</p>
      ) : null}
      {type === 1 ? (
        <input onChange={handleChange} />
      ) : (
        <ChoixMultiple choix={choix} setValue={setValue} />
      )}
      <button onClick={onSubmit}>vérifie!</button>
    </ExerciseStyled>
  );
};

export default Exercise;
