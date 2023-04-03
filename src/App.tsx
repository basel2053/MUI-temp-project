import { useState } from 'react';
import Layout from './components/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>hey</Layout>;
    </ThemeProvider>
  );
}

export default App;
