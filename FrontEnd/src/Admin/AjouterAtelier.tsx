import React from "react";

import { AjouterAtelierStyled } from "./styles/AjouterAtelier.styles.js";

type Props = {
  navigator: React.Dispatch<React.SetStateAction<string>>;
};

const AjouterAtelier: React.FC<Props> = ({ navigator }) => {
  return (
    <AjouterAtelierStyled>
      <h1>ajoute un atelier ici</h1>
      <p onClick={() => navigator("home")}>retour au menu</p>
      <p>
        faire un formulaire qui demande la matiere, si cest un test ou atelier
        pi apres avoir infini de question ajoutable que tu choose entre text ou
        choix de reponse
      </p>
      <p>Demander pour quel semaine</p>
    </AjouterAtelierStyled>
  );
};

export default AjouterAtelier;
