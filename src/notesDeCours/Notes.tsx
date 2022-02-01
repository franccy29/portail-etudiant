import React from "react";
import NotesMatiere from "./NotesMatiere";

import { NotesStyled } from "./styles/Notes.styles.js";

type Props = {
  navigator: (nomDePage: string) => void;
  matiereChoose: (nomDePage: string) => void;
};

const matieres: { matiere: string; img: string }[] = [
  {
    matiere: "francais",
    img: "lien de limage",
  },
  {
    matiere: "anglais",
    img: "lien de limage",
  },
  {
    matiere: "maths",
    img: "lien de limage",
  },
];

const Notes: React.FC<Props> = ({ navigator, matiereChoose }) => {
  const matiereArray: JSX.Element[] = [];
  matieres.forEach((mat) =>
    matiereArray.push(
      <NotesMatiere
        navigator={navigator}
        matiereChoose={matiereChoose}
        matiere={mat.matiere}
        img={mat.img}
      />
    )
  );

  return <NotesStyled>{matiereArray}</NotesStyled>;
};

export default Notes;
