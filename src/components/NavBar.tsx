import * as React from 'react';
import {NavBarStyled} from "./styles/NarBar.styles";

type Props = {

};

const NavBar: React.FC<Props> = props => {


  return (
    <NavBarStyled>
      <p>une image ici</p>
      <h2>Classe de Pierre-Karl</h2>
      <p> groupe 60x</p>

    </NavBarStyled>
  );
};

export default NavBar;