import React from "react";

import { HomeStyled } from "./styles/Home.styles.js";

type Props = {
  navigator: React.Dispatch<React.SetStateAction<string>>;
};

const Home: React.FC<Props> = ({ navigator }) => {
  return (
    <HomeStyled>
      <h1>
        WHATS UPPPPPPPPPPPPPPPPPPPPPPPP PIKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK!!!!!!
      </h1>
      <h2>Tu veux add quoi?</h2>
      <p>Tu veux show combien de semaines?(faire la logique)</p>
      <p onClick={() => navigator("AjouterAtelier")}>Un Atelier?</p>
      <p onClick={() => navigator("AjouterNotes")}>Des notes de cours?</p>
      <h2>Tu modifier quoi?</h2>
      <p onClick={() => navigator("ModifierAtelier")}>Un Atelier?</p>
      <p onClick={() => navigator("ModifierNotes")}>Des notes de cours?</p>
    </HomeStyled>
  );
};

export default Home;
