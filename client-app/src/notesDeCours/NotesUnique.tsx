import React from "react";

import { NotesUniqueStyled } from "./styles/NotesUnique.styles.js";

type Props = {
  titre: string;
  lien: string;
};

const NotesUnique: React.FC<Props> = ({ titre, lien }) => {
  return (
    <NotesUniqueStyled>
      <h2>{titre}</h2>
      <p>baser sur ce lien la {lien}</p>
    </NotesUniqueStyled>
  );
};

export default NotesUnique;
