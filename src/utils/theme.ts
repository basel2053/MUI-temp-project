declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    tl: true;
  }
}

import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    error: {
      main: '#FF695F',
    },
    primary: {
      main: '#03A4ED',
    },
    secondary: {
      main: '#afafaf',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tl: 768,
      md: 992,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
