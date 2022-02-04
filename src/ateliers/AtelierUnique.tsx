import React from "react";

import { AtelierUniqueStyled } from "./styles/AtelierUnique.styles.js";

type Props = {
  id: number;
  matière: string;
  titre: string;
  onClick: (idChoosen: number) => void;
};

const AtelierUnique: React.FC<Props> = ({ id, matière, titre, onClick }) => {
  return (
    <AtelierUniqueStyled onClick={() => onClick(id)}>
      <p>le id: {id}</p>
      <h2>{titre}</h2>
      <p>une image based on la matiere: {matière}</p>
    </AtelierUniqueStyled>
  );
};

export default AtelierUnique;
