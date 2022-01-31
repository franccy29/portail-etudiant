import React from "react";
import NotesUnique from "./NotesUnique";

import { NotesListStyled } from "./styles/NotesList.styles.js";

type Props = { matiere: string };

const data: { id: number; matiere: string; titre: string; lien: string }[] = [
  {
    id: 1,
    matiere: "francais",
    titre: "titre dun pdf de francais",
    lien: "lien du pdf",
  },
  {
    id: 2,
    matiere: "anglais",
    titre: "titre dun pdf de anglais",
    lien: "lien du pdf",
  },
  {
    id: 3,
    matiere: "francais",
    titre: "titre dun pdf de francais2",
    lien: "lien du pdf",
  },
  {
    id: 4,
    matiere: "anglais",
    titre: "titre dun pdf de anglais2",
    lien: "lien du pdf",
  },
  {
    id: 5,
    matiere: "maths",
    titre: "titre dun pdf de Maths",
    lien: "lien du pdf",
  },
  {
    id: 6,
    matiere: "anglais",
    titre: "titre dun pdf de anglais3",
    lien: "lien du pdf",
  },
];

const NotesList: React.FC<Props> = ({ matiere }) => {
  const pdfArray: JSX.Element[] = [];

  data.forEach((note) => {
    if (note.matiere === matiere) {
      pdfArray.push(
        <NotesUnique key={note.id} titre={note.titre} lien={note.lien} />
      );
    }
  });

  return <NotesListStyled>{pdfArray}</NotesListStyled>;
};

export default NotesList;
