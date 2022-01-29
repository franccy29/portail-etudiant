import * as React from 'react';
import {NavBarStyled} from "./styles/NarBar.styles";

type Props = {

};

const NavBar: React.FC<Props> = props => {


  return (
    <NavBarStyled>
      <div>
        <span>"L'éducation est l'arme la plus puissante pour changer le monde."</span>
        <span>-Nelson Mandela</span>
      </div>
      <p>ACCUEIL</p>
      <p>NOTES DE COURS</p>
      <p>SEMAINES</p>
      <p>CAPSULES</p>
      <p>TESTS</p>
    </NavBarStyled>
  );
};

export default NavBar;