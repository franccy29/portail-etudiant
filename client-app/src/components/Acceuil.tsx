import React from "react";
import imageTitre from "../images/abc.png";

import { AcceuilStyled } from "./styles/Acceuil.styles.js";

type Props = {};

const Acceuil: React.FC<Props> = (props) => {
  return (
    <AcceuilStyled>
      <img src={imageTitre} alt="class" />
      <h1>Bienvenue dans la classe de Pierre-Karl</h1>
      <p>Groupe 601</p>
      <p>2024-2025</p>
    </AcceuilStyled>
  );
};

export default Acceuil;
