import React from "react";
import NotesUnique from "./NotesUnique";
import NotesUniqueVideo from "./NoteUniqueVideo";

import { NotesListStyled } from "./styles/NotesList.styles.js";

type Props = { matiere: string };

const data: {
  id: number;
  matiere: string;
  titre: string;
  lien: string;
  pdf: boolean;
}[] = [
  {
    id: 1,
    matiere: "francais",
    titre: "titre dun pdf de francais",
    lien: "lien du pdf",
    pdf: true,
  },
  {
    id: 2,
    matiere: "anglais",
    titre: "titre dun pdf de anglais",
    lien: "lien du pdf",
    pdf: true,
  },
  {
    id: 3,
    matiere: "francais",
    titre: "titre dun pdf de francais2",
    lien: "lien du pdf",
    pdf: true,
  },
  {
    id: 4,
    matiere: "anglais",
    titre: "titre dun pdf de anglais2",
    lien: "lien du pdf",
    pdf: true,
  },
  {
    id: 5,
    matiere: "maths",
    titre: "titre dun pdf de Maths",
    lien: "lien du pdf",
    pdf: true,
  },
  {
    id: 6,
    matiere: "anglais",
    titre: "titre dun pdf de anglais3",
    lien: "lien du pdf",
    pdf: true,
  },
  {
    id: 7,
    matiere: "francais",
    titre: "titre dun video de francais",
    lien: "lien du video",
    pdf: false,
  },
  {
    id: 8,
    matiere: "anglais",
    titre: "titre dun video de anglais",
    lien: "lien du video",
    pdf: false,
  },
  {
    id: 9,
    matiere: "maths",
    titre: "titre dun video de francais",
    lien: "lien du video",
    pdf: false,
  },
  {
    id: 10,
    matiere: "anglais",
    titre: "titre dun video de anglais",
    lien: "lien du video",
    pdf: false,
  },
];

const NotesList: React.FC<Props> = ({ matiere }) => {
  const notesArray: JSX.Element[] = [];

  data.forEach((note) => {
    if (note.matiere === matiere) {
      if (note.pdf) {
        notesArray.push(
          <NotesUnique key={note.id} titre={note.titre} lien={note.lien} />
        );
      } else {
        notesArray.push(
          <NotesUniqueVideo key={note.id} titre={note.titre} lien={note.lien} />
        );
      }
    }
  });

  return <NotesListStyled>{notesArray}</NotesListStyled>;
};

export default NotesList;
