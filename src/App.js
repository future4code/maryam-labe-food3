import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';
import { Button } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      Oi
    </ThemeProvider>
  );
}

export default App;
