import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';
import CreateAddressPage from './pages/CreateAddressPage/CreateAddressPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      Oi
    </ThemeProvider>
  );
}

export default App;
