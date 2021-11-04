import React from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';

const EditProfilePage = () => {
  useProtectedPage();
  return (
    <div>
      Editar perfil
    </div>
  );
}

export default EditProfilePage;
