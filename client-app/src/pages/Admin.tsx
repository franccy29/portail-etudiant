import React from "react";

import { AdminStyled } from "./styles/Admin.styles.js";

type Props = {};

const Admin: React.FC<Props> = (props) => {
  return (
    <AdminStyled>
      <p>ici cest la partie admin, il faut le securisé</p>
    </AdminStyled>
  );
};

export default Admin;
