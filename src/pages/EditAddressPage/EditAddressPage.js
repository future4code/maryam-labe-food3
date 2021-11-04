import React from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';

const EditAddressPage = () => {
  useProtectedPage();
  return (
    <div>
      Editar endereço
    </div>
  );
}

export default EditAddressPage;
