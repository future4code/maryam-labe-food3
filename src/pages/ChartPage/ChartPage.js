import React, { useContext } from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { GlobalContext } from '../../context/GlobalContext'

const ChartPage = () => {

  const {setHeaderName} = useContext(GlobalContext) 

  setHeaderName('Meu carrinho')

  useProtectedPage();
  return (
    <div>
      Carrinho
    </div>
  );
}

export default ChartPage;
