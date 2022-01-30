import React, { useState } from "react";

import { AteliersStyled } from "./styles/Ateliers.styles.js";

type Props = {
  navigator: (nomDePage: string) => void;
};

const data = {
  weeks: "5",
};

const Ateliers: React.FC<Props> = ({ navigator }) => {
  const [week, setWeek] = useState<string>(data.weeks);
  const weekArray: JSX.Element[] = [];

  for (let i = 1; i <= Number(data.weeks); i++) {
    weekArray.push(
      <option key={i} value={i}>
        Semaine {i}
      </option>
    );
  }

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setWeek(e.target.value);
  };

  const no = (): void => {
    navigator("AtelierSemaine");
  };

  return (
    <AteliersStyled>
      <h2>Choisis ta semaine!</h2>
      <select value={week} onChange={handleChange}>
        {weekArray}
      </select>
      <button onClick={no}>aller!</button>
    </AteliersStyled>
  );
};

export default Ateliers;
