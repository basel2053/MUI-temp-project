import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const navItems = ['Home', 'Services', 'About', 'Portfolio', 'Videos', 'Contact Us'];

function Nav() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const openMenuHandler = (state: boolean) => {
    setShowMenu(state);
  };
  return (
    <>
      <AppBar
        component="nav"
        elevation={0}
        sx={{ background: '#fafafa', minHeight: 100, justifyContent: 'center', position: 'relative' }}
      >
        <Container sx={{ maxWidth: { xl: 1400, lg: 1400, md: 1040, tl: 800, sm: 600 } }}>
          <Toolbar sx={{ color: '#2a2a2a', gap: { lg: 8, md: 4 } }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'block' }}>
              <img src="/images/logo.png" alt="logo" />
            </Typography>
            <Box sx={{ display: { xs: 'none', tl: 'block' } }}>
              {navItems.map(item => (
                <Button
                  key={item}
                  sx={{
                    color: '#2a2a2a',
                    '&:hover': { color: theme => theme.palette.error.main },
                    '&:not(:last-child)': { mr: { lg: 4, md: 2, sm: 1 } },
                    fontWeight: 600,
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { sm: 'block', tl: 'none' } }}>
              {showMenu ? (
                <CloseIcon
                  fontSize="large"
                  onClick={() => {
                    openMenuHandler(false);
                  }}
                />
              ) : (
                <MenuIcon
                  fontSize="large"
                  onClick={() => {
                    openMenuHandler(true);
                  }}
                />
              )}
            </Box>
            <Button
              variant="contained"
              color="error"
              sx={{
                color: '#fff',
                fontWeight: 400,
                '&:hover': { bgcolor: theme => theme.palette.primary.main },
                borderRadius: '40px',
                py: 0.8,
                px: 3,
                fontSize: { lg: 15 },
                display: { xs: 'none', md: 'inline-flex' },
              }}
            >
              Contact Us Now
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Stack
        sx={{
          display: { sm: 'flex', tl: 'none' },
          position: 'absolute',
          background: '#fafafa',
          ml: 'auto',
          mr: 'auto',
          left: 0,
          right: 0,
          transition: '0.4s',
        }}
        maxWidth="80%"
        className={showMenu ? 'animate' : 'idle'}
      >
        {navItems.map(item => (
          <Button
            key={item}
            sx={{
              color: '#2a2a2a',
              fontWeight: 500,
              '&:active': { bgcolor: theme => theme.palette.error.main, color: '#fff' },
              '&:first-of-type': { borderTop: '1px solid #e7e7e7' },
              borderBottom: '1px solid #e7e7e7',
              py: 1.5,
            }}
          >
            {item}
          </Button>
        ))}
      </Stack>
    </>
  );
}

export default Nav;
