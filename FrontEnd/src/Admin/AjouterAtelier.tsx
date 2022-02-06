import React, { useState } from "react";
import FaireAtelier from "./FaireAtelier";

import { AjouterAtelierStyled } from "./styles/AjouterAtelier.styles.js";

type Props = {
  navigator: React.Dispatch<React.SetStateAction<string>>;
};

const AjouterAtelier: React.FC<Props> = ({ navigator }) => {
  const [questionArray, setQuestionArray] = useState<JSX.Element[]>([
    <FaireAtelier key={1} envoyerQuestion={ajouterQuestions} />,
  ]);
  const [semaineChoisis, setSemaineChoisis] = useState<number>(0);
  const [titre, setTitre] = useState<string>("");

  const atelierPourBdd: {
    semaine: number;
    titre: string;
    questions: {
      type: number;
      img?: string;
      question: string;
      reponse: string | number;
      choix?: string[];
    }[];
  } = {
    semaine: semaineChoisis,
    titre: titre,
    questions: [],
  };

  const handleSemaine = (input: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    if (Number(input.target.value) <= 45) {
      setSemaineChoisis(Number(input.target.value));
    }
  };

  function ajouterQuestions(
    type: number,
    question: string,
    reponse: string | number,
    choix?: string[],
    img?: string
  ): void {
    let objetQuestion: {
      type: number;
      img?: string;
      question: string;
      reponse: string | number;
      choix?: string[];
    } = {
      type,
      question,
      reponse,
    };
    if (img) {
      objetQuestion.img = img;
    }
    if (type === 2) {
      objetQuestion.choix = choix;
    }
    atelierPourBdd.questions.push(objetQuestion);
    setQuestionArray((oldArray) => [
      ...oldArray,
      <FaireAtelier
        key={oldArray.length + 1}
        envoyerQuestion={ajouterQuestions}
      />,
    ]);
    console.log(atelierPourBdd);
  }

  return (
    <AjouterAtelierStyled>
      <h1>ajoute un atelier ici</h1>
      <p onClick={() => navigator("home")}>retour au menu</p>
      <p>
        faire un formulaire qui demande la matiere, si cest un test ou atelier
        pi apres avoir infini de question ajoutable que tu choose entre text ou
        choix de reponse
      </p>

      <p>
        La semaien et le titre update pas dans lobjet...live je me dit de el
        faire en useState avec un set state qui prend le old object a chaque on
        change du input might work, pas sur, a voir!
      </p>
      <p>quel titre va avoir ton exercises?</p>
      <input
        placeholder={titre}
        onChange={(e) => setTitre(e.target.value)}
        value={titre}
      />
      <p>La question est pour quelle semaine?</p>
      <input
        placeholder={String(semaineChoisis)}
        onChange={handleSemaine}
        value={semaineChoisis}
      />
      {questionArray && questionArray}
    </AjouterAtelierStyled>
  );
};

export default AjouterAtelier;
