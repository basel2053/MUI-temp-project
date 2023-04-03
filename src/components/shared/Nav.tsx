import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const navItems = ['Home', 'Services', 'About', 'Portfolio', 'Videos', 'Contact Us'];

function Nav() {
  return (
    <AppBar component='nav' elevation={0} sx={{ background: '#fafafa', minHeight: 100, justifyContent: 'center' }}>
      <Container sx={{ maxWidth: { xl: 1400 } }}>
        <Toolbar sx={{ color: '#2a2a2a' }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button key={item} sx={{ color: '#2a2a2a', '&:hover': { color: theme => theme.palette.error.main } }}>
                {item}
              </Button>
            ))}
          </Box>
          <Button variant='contained' color='error'>
            Contact Us Now
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
