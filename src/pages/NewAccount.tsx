import React from "react";
import { Link } from "react-router-dom";
import { NewAccountStyled } from "./styles/NewAccount.styles.js";

type Props = {};

const NewAccount: React.FC<Props> = (props) => {
  return (
    <NewAccountStyled>
      <h2>Crée ton compte ici!</h2>
      <button>
        <Link to="/Home">Laisse moi faire mes exercises!</Link>
      </button>
    </NewAccountStyled>
  );
};

export default NewAccount;
