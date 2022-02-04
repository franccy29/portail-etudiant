import React from "react";

import { NotesUniqueVideoStyled } from "./styles/NotesUniqueVideo.styles.js";

type Props = {
  titre: string;
  lien: string;
};

const NotesUniqueVideo: React.FC<Props> = ({ titre, lien }) => {
  return (
    <NotesUniqueVideoStyled>
      <h2>Capsule vidéo</h2>
      <h2>{titre}</h2>
      <p>baser sur ce lien ladasfasgfdasggggggggggggggggggggg {lien}</p>
    </NotesUniqueVideoStyled>
  );
};

export default NotesUniqueVideo;
