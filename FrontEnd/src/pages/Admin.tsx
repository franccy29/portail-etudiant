import React, { useEffect, useState } from "react";
import axios from "axios";

import { AdminStyled } from "./styles/Admin.styles.js";

type Props = {};

const Admin: React.FC<Props> = (props) => {
  const [state, setState] = useState<
    {
      id: number;
      name: string;
      lastName: string;
      firstName: string;
      place: string;
    }[]
  >([]);

  useEffect(() => {
    axios.get("https://localhost:7204/test").then((res) => {
      setState([...state, res.data[0]]);
      console.log(state);
    });
  }, [state]);
  return (
    <AdminStyled>
      <p>ici cest la partie admin, il fautsg securisé</p>
      <p>{state[0] ? state[0].id : "non"}</p>
    </AdminStyled>
  );
};

export default Admin;
