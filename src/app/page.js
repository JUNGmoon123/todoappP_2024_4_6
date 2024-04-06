'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Box, AppBar, Toolbar } from '@mui/material';
import theme from './theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button href="sub/ " variant="contained">
          버튼
        </Button>
      </ThemeProvider>
    </>
  );
}
