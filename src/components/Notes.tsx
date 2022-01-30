import React from "react";

import { NotesStyled } from "./styles/Notes.styles.js";

type Props = {};

const Notes: React.FC<Props> = (props) => {
  return (
    <NotesStyled>
      <p>Notes</p>
    </NotesStyled>
  );
};

export default Notes;
