import React from 'react';
import { DivFooter, DivButtons } from "./FooterStyles"

const Footer = () => {
  return (
    <DivFooter>
      <DivButtons>
        <button>Casa</button>
        <button>Carrinho</button>
        <button>Perfil</button>
      </DivButtons>
    </DivFooter>
  );
}

export default Footer;
