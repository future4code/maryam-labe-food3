import React from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';

const ProfilePage = () => {
  useProtectedPage();
  return (
    <div>
      Editar perfil
    </div>
  );
}

export default ProfilePage;
