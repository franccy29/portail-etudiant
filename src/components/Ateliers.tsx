import React, { useState } from "react";

import { AteliersStyled } from "./styles/Ateliers.styles.js";

type Props = {
  navigator: (nomDePage: string) => void;
  weekChange: (numeroDeSemaine: number) => void;
};

const data = {
  weeks: 5,
};

const Ateliers: React.FC<Props> = ({ navigator, weekChange }) => {
  const weekArray: JSX.Element[] = [];
  const [selector, setSelector] = useState<number>(data.weeks);

  for (let i = 1; i <= data.weeks; i++) {
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

  const onSubmit = (): void => {
    weekChange(selector);
    navigator("AtelierSemaine");
  };

  return (
    <AteliersStyled>
      <h2>Choisis ta semaine!</h2>
      <select value={selector} onChange={handleChange}>
        {weekArray}
      </select>
      <button onClick={onSubmit}>aller!</button>
    </AteliersStyled>
  );
};

export default Ateliers;
