import * as React from 'react';
import NavBar from "../components/NavBar";

import {HomePageStyled} from "./styles/HomePage.styles.js";

type Props = {

};

const HomePage: React.FC<Props> = props => {


  return (
    <HomePageStyled>
      <NavBar />
      <p>une image ici</p>
      <h2>Classe de Pierre-Karl</h2>
      <p> groupe 60x</p>

    </HomePageStyled>
  );
};

export default HomePage;