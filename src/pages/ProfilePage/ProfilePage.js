import React, { useContext } from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { GlobalContext } from '../../context/GlobalContext'


const ProfilePage = () => {

  const {setHeaderName} = useContext(GlobalContext) 

  setHeaderName('Meu Perfil')

  useProtectedPage();
  return (
    <div>
      Editar perfil
    </div>
  );
}

export default ProfilePage;
