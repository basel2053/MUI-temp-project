import { useState } from 'react';
import Layout from './components/Layout';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <GlobalStyles styles={{ '&::selection': { bgcolor: theme => theme.palette.primary.main, color: '#fff' } }} /> */}
      <Layout>hey</Layout>;
    </ThemeProvider>
  );
}

export default App;
