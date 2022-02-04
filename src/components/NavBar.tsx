import React from "react";

import { NavBarStyled } from "./styles/NarBar.styles";

type Props = {
  navigator: (nomDePage: string) => void;
};

const NavBar: React.FC<Props> = ({ navigator }) => {
  return (
    <NavBarStyled>
      <div>
        <span>
          "L'éducation est l'arme la plus puissante pour changer le monde."
        </span>
        <span>-Nelson Mandela</span>
      </div>
      <p
        onClick={() => {
          navigator("ACCUEIL");
        }}
      >
        ACCUEIL
      </p>
      <p
        onClick={() => {
          navigator("NOTES");
        }}
      >
        NOTES DE COURS
      </p>
      <p
        onClick={() => {
          navigator("ATELIERS");
        }}
      >
        ATELIERS
      </p>
      <p
        onClick={() => {
          navigator("CAPSULES");
        }}
      >
        CAPSULES
      </p>
      <p
        onClick={() => {
          navigator("TESTS");
        }}
      >
        TESTS
      </p>
    </NavBarStyled>
  );
};

export default NavBar;
