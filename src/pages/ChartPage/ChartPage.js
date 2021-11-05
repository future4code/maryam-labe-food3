import React, { useContext } from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { GlobalContext } from '../../context/GlobalContext'

const ChartPage = () => {

  const {setHeaderName, setChangePage, setShowLine} = useContext(GlobalContext) 

  setHeaderName('Meu carrinho')
  setChangePage(false)
  setShowLine(true)

  useProtectedPage();
  return (
    <div>
      Carrinho
    </div>
  );
}

export default ChartPage;
