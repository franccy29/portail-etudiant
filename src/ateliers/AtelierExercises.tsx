import React from "react";

import { AtelierExercisesStyled } from "./styles/AtelierExercises.styles.js";

type Props = {
  atelierId: number;
};

const AtelierExercises: React.FC<Props> = ({ atelierId }) => {
  return (
    <AtelierExercisesStyled>
      <p>ca cest lexercise avec le id: {atelierId}</p>
    </AtelierExercisesStyled>
  );
};

export default AtelierExercises;
