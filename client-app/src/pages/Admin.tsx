import axios from "axios";
import React from "react";

import { AdminStyled } from "./styles/Admin.styles.js";

type Props = {};

const Admin: React.FC<Props> = (props) => {
  axios.get("https://localhost:7204/test").then((res) => {
    const persons = res.data;
    console.log(persons);
  });

  return (
    <AdminStyled>
      <p>ici cest la partie admin, il faut le securisé</p>
    </AdminStyled>
  );
};

export default Admin;
