import React from "react";
import { DivFooter, DivButtons } from "./FooterStyles";
import { useHistory } from "react-router";
import { goToProfile } from "../../routes//coordinator";

const Footer = () => {
  const history = useHistory();

  return (
    <DivFooter>
      <DivButtons>
        <button>Casa</button>
        <button>Carrinho</button>
        <button onClick={() => goToProfile(history)}>Perfil</button>
      </DivButtons>
    </DivFooter>
  );
};

export default Footer;
