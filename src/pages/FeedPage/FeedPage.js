import React from 'react';
import Footer from "../../components/Footer/Footer"

const FeedPage = () => {
  return (
    <div>
      <div>
        <input placeholder={"Restaurante"}/>
      </div>
      <div>
        <p>Opções Restaurante:</p>
        <select>
          <option>Buger</option>
          <option>Asiática</option>
          <option>Massas</option>
          <option>Saudáveis</option>
        </select>
      </div>
      {/* Fazer requisição com base nas options */}
      <Footer />
    </div>
  );
}

export default FeedPage;
