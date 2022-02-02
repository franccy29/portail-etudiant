import React from "react";
import { Link } from "react-router-dom";
import { LandingPageStyled } from "./styles/LandingPage.styles.js";

type Props = {};

const LandingPage: React.FC<Props> = (props) => {
  return (
    <LandingPageStyled>
      <h2>Bienvenue dans la classe de Pierre-Karl</h2>
      <div>
        <input placeholder="Ton nom d'utilisateur!"></input>
        <input type="password" placeholder="Ton mot de passe!"></input>
        <button>
          <Link to="/Home">Laisse moi entrer!</Link>
        </button>
        <Link to="/NewAccount">Clique ici pour créé ton compte!</Link>
      </div>
    </LandingPageStyled>
  );
};

export default LandingPage;
