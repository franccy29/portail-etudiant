import React, { useState } from "react";
import AtelierSemaine from "./AtelierSemaine";

import { AteliersStyled } from "./styles/Ateliers.styles.js";

type Props = {
  navigator: (nomDePage: string) => void;
  AtelierChoisis: (idDeLatelier: number) => void;
};

const data = {
  weeks: 45,
};

const Ateliers: React.FC<Props> = ({ navigator, AtelierChoisis }) => {
  const weekArray: JSX.Element[] = [];
  const [selector, setSelector] = useState<number>(data.weeks);

  for (let i = data.weeks; i >= 1; i--) {
    weekArray.push(
      <option key={i} value={i}>
        Semaine {i}
      </option>
    );
  }

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setSelector(Number(e.target.value));
  };

  const chooseAtelier = (idChoosen: number): void => {
    navigator("OuvrirAtelier");
    AtelierChoisis(idChoosen);
  };

  return (
    <AteliersStyled>
      <h2>Choisis ta semaine!</h2>
      <select value={selector} onChange={handleChange}>
        {weekArray}
      </select>
      {<AtelierSemaine semaine={selector} onClick={chooseAtelier} />}
    </AteliersStyled>
  );
};

export default Ateliers;
