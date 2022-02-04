import React, { useState } from "react";
import Home from "../Admin/Home";
import AjouterAtelier from "../Admin/AjouterAtelier";
import AjouterNotes from "../Admin/AjouterNotes";
import ModifierAtelier from "../Admin/ModifierAtelier";
import ModifierNotes from "../Admin/ModifierNotes";

import { AdminStyled } from "./styles/Admin.styles.js";

type Props = {};

const Admin: React.FC<Props> = (props) => {
  // const [state, setState] = useState<
  //   {
  //     id: number;
  //     name: string;
  //     lastName: string;
  //     firstName: string;
  //     place: string;
  //   }[]
  // >([]);

  // useEffect(() => {
  //   axios.get("https://localhost:7204/test").then((res) => {
  //     setState([...state, res.data[0]]);
  //     console.log(state);
  //   });
  // }, [state]);

  const [navigAdmin, setNavigAdmin] = useState<string>("home");

  return (
    <AdminStyled>
      {navigAdmin === "home" && <Home navigator={setNavigAdmin} />}
      {navigAdmin === "AjouterAtelier" && (
        <AjouterAtelier navigator={setNavigAdmin} />
      )}
      {navigAdmin === "AjouterNotes" && (
        <AjouterNotes navigator={setNavigAdmin} />
      )}
      {navigAdmin === "ModifierAtelier" && (
        <ModifierAtelier navigator={setNavigAdmin} />
      )}
      {navigAdmin === "ModifierNotes" && (
        <ModifierNotes navigator={setNavigAdmin} />
      )}
    </AdminStyled>
  );
};

export default Admin;
