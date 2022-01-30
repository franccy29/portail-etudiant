import React from "react";
import AtelierUnique from "./AtelierUnique";

import { AtelierSemaineStyled } from "./styles/AtelierSemaine.styles.js";

type Props = {
  semaine: number;
};

const data: {
  id: number;
  matière: string;
  titre: string;
}[] = [
  {
    id: 1,
    matière: "francais",
    titre: "homophones",
  },
  {
    id: 2,
    matière: "maths",
    titre: "additions",
  },
  {
    id: 3,
    matière: "anglais",
    titre: "speak in english",
  },
];

const AtelierSemaine: React.FC<Props> = ({ semaine }) => {
  const AtelierArray: JSX.Element[] = [];
  data.forEach((Atelier) => {
    AtelierArray.push(
      <AtelierUnique
        key={Atelier.id}
        id={Atelier.id}
        matière={Atelier.matière}
        titre={Atelier.titre}
      />
    );
  });

  return (
    <AtelierSemaineStyled>
      <p>atelier de la semaine: {semaine}</p>
      {AtelierArray}
    </AtelierSemaineStyled>
  );
};

export default AtelierSemaine;
