import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';
import CreateAddressPage from './pages/CreateAddressPage/CreateAddressPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Oi */}
      <CreateAddressPage />
    </ThemeProvider>
  );
}

export default App;
