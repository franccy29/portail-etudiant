import React, { useState } from "react";
import FaireAtelier from "./FaireAtelier";

import { AjouterAtelierStyled } from "./styles/AjouterAtelier.styles.js";

type Props = {
  navigator: React.Dispatch<React.SetStateAction<string>>;
};

const AjouterAtelier: React.FC<Props> = ({ navigator }) => {
  const [numQuestions, setNumQuestions] = useState<number>(0);
  const [questionArray, setQuestionArray] = useState<JSX.Element[]>([]);
  const [semaineChoisis, setSemaineChoisis] = useState<number>(0);

  const renderNombreQuestions = (): JSX.Element => {
    const handleChange = (input: {
      target: { value: React.SetStateAction<string> };
    }): void => {
      if (!isNaN(Number(input.target.value))) {
        setNumQuestions(Number(input.target.value));
      }
    };

    const createQuestions = (num: number): void => {
      for (let i = num; i > 0; i--) {
        setQuestionArray((oldArray) => [...oldArray, <FaireAtelier key={i} />]);
      }
    };

    return (
      <div>
        <input
          placeholder={String(numQuestions)}
          onChange={handleChange}
          value={numQuestions}
        />
        <button onClick={() => createQuestions(numQuestions)}>
          Set a ce nombre de questions la
        </button>
      </div>
    );
  };

  const handleSemaine = (input: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    if (Number(input.target.value) <= 45) {
      setSemaineChoisis(Number(input.target.value));
    }
  };

  return (
    <AjouterAtelierStyled>
      <h1>ajoute un atelier ici</h1>
      <p onClick={() => navigator("home")}>retour au menu</p>
      <p>
        faire un formulaire qui demande la matiere, si cest un test ou atelier
        pi apres avoir infini de question ajoutable que tu choose entre text ou
        choix de reponse
      </p>
      <p>La question est pour quelle semaine?</p>
      <input
        placeholder={String(semaineChoisis)}
        onChange={handleSemaine}
        value={semaineChoisis}
      />
      <p>comien de questions dans ton test?</p>
      {questionArray[0] ? questionArray : renderNombreQuestions()}
    </AjouterAtelierStyled>
  );
};

export default AjouterAtelier;
