import React, { useState } from "react";

import { ChoixMultipleStyled } from "./styles/ChoixMultiple.styles.js";

type Props = {
  choix: string[] | undefined;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const ChoixMultiple: React.FC<Props> = ({ choix, setValue }) => {
  const [selected, setSelected] = useState<number>(0);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setValue(Number(e.target.value));
    setSelected(Number(e.target.value));
  };

  return (
    <ChoixMultipleStyled onChange={handleChange}>
      <input type="radio" value={1} checked={selected === 1} />
      {choix && choix[0]}
      <input type="radio" value={2} checked={selected === 2} />
      {choix && choix[1]}
      <input type="radio" value={3} checked={selected === 3} />
      {choix && choix[2]}
      <input type="radio" value={4} checked={selected === 4} />
      {choix && choix[3]}
    </ChoixMultipleStyled>
  );
};

export default ChoixMultiple;
