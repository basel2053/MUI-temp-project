import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';
import GlobalStyles from '@mui/material/GlobalStyles';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <GlobalStyles styles={{ '&::selection': { bgcolor: theme => theme.palette.primary.main, color: '#fff' } }} /> */}
      <Layout>
        <Hero />
        <Services />
        <Stats />
        <Projects />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
