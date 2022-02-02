import React, { useState } from "react";
import Exercise from "./Exercise";

import { AtelierExercisesStyled } from "./styles/AtelierExercises.styles.js";

type Props = {
  atelierId: number;
};

const data: {
  id: number;
  img: string;
  reponse: string | number;
  question: string;
  type: number;
  choix?: string[];
}[] = [
  {
    id: 2,
    reponse: "reponse1",
    img: "lien d'image",
    question: "la question1 est ici",
    type: 1,
  },
  {
    id: 2,
    reponse: "reponse2",
    img: "lien d'image",
    question: "la question2 est ici",
    type: 1,
  },
  {
    id: 2,
    reponse: "reponse3",
    img: "lien d'image",
    question: "la question3 est ici",
    type: 1,
  },
  {
    id: 2,
    reponse: 4,
    img: "lien d'image",
    question: "la question4 est ici cest choix de reponse et la reponse cest 4",
    choix: ["test1", "test2", "test3", "test4 et reponse"],
    type: 2,
  },
];

const AtelierExercises: React.FC<Props> = () => {
  const exerciseArray: JSX.Element[] = [];
  const completArray: boolean[] = [];
  const [finito, setFinito] = useState<boolean>(false);

  const completChange = (id: number): void => {
    if (!finito) {
      completArray[id] = true;
      setFinito(completArray.every((v) => v === true));
    }
  };

  data.forEach((question, i) => {
    completArray.push(false);

    exerciseArray.push(
      <Exercise
        key={i}
        id={i}
        reponse={question.reponse}
        img={question.img}
        question={question.question}
        type={question.type}
        choix={question.choix}
        reussis={completChange}
      />
    );
  });

  return (
    <AtelierExercisesStyled>
      {exerciseArray}
      {finito && <p>TU AS TOUT EU BON</p>}
    </AtelierExercisesStyled>
  );
};

export default AtelierExercises;
