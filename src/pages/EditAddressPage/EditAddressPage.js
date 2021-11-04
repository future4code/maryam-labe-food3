import React, { useContext } from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { GlobalContext } from '../../context/GlobalContext'

const EditAddressPage = () => {

  const {setChangePage, setHeaderName} = useContext(GlobalContext) 

  setChangePage(true)
  setHeaderName('Endereço')

  useProtectedPage();
  return (
    <div>
      Editar endereço
    </div>
  );
}

export default EditAddressPage;
