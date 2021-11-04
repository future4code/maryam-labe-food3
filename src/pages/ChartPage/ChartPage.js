import React from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';

const ChartPage = () => {
  useProtectedPage();
  return (
    <div>
      Carrinho
    </div>
  );
}

export default ChartPage;
