import React from "react";

import { TestsStyled } from "./styles/Tests.styles.js";

type Props = {};

const Tests: React.FC<Props> = (props) => {
  return (
    <TestsStyled>
      <p>Tests</p>
    </TestsStyled>
  );
};

export default Tests;
