import React, { useContext } from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { GlobalContext } from '../../context/GlobalContext'

const EditProfilePage = () => {

  const {setChangePage, setHeaderName, setShowLine} = useContext(GlobalContext) 

  setChangePage(true)
  setHeaderName('Editar')
  setShowLine(true)

  useProtectedPage();
  return (
    <div>
      Editar perfil
    </div>
  );
}

export default EditProfilePage;
