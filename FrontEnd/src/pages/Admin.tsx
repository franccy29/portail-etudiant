import React from "react";
import axios from "axios";

import { AdminStyled } from "./styles/Admin.styles.js";

type Props = {};

const Admin: React.FC<Props> = (props) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
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
