import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

const serviceLinks = ['SEO Development', 'Business Growth', 'Social Media Managment', 'Website Optimization'];
const communityLinks = ['Digital Marketing', 'Business Ideas', 'Website Checkup', 'Page Speed Test'];

function Footer() {
  return (
    <Box>
      <Container sx={{ maxWidth: { xl: 1400, lg: 1400, md: 1040, tl: 800, sm: 600 } }}>
        <Stack direction='row' sx={{ px: 2.8 }}>
          <Box sx={{ flex: 1 }}>
            <img src='/images/logo.png' alt='logo' />
            <Typography color='secondary' sx={{ my: 3 }}>
              info@company.com
            </Typography>
            <Stack direction='row' spacing={1}>
              <Button
                size='small'
                sx={{
                  maxWidth: 35,
                  maxHeight: 35,
                  minWidth: 35,
                  minHeight: 35,
                  backgroundColor: theme => theme.palette.primary.main,
                  borderRadius: 28,
                  '&:hover': { bgcolor: theme => theme.palette.error.main },
                }}
              >
                <FacebookOutlinedIcon sx={{ color: 'white' }} fontSize='small' />
              </Button>
              <Button
                size='small'
                sx={{
                  maxWidth: 35,
                  maxHeight: 35,
                  minWidth: 35,
                  minHeight: 35,
                  backgroundColor: theme => theme.palette.primary.main,
                  borderRadius: 28,
                  '&:hover': { bgcolor: theme => theme.palette.error.main },
                }}
              >
                <TwitterIcon sx={{ color: 'white' }} fontSize='small' />
              </Button>
              <Button
                size='small'
                sx={{
                  maxWidth: 35,
                  maxHeight: 35,
                  minWidth: 35,
                  minHeight: 35,
                  backgroundColor: theme => theme.palette.primary.main,
                  borderRadius: 28,
                  '&:hover': { bgcolor: theme => theme.palette.error.main },
                }}
              >
                <LinkedInIcon sx={{ color: 'white' }} fontSize='small' />
              </Button>
              <Button
                size='small'
                sx={{
                  maxWidth: 35,
                  maxHeight: 35,
                  minWidth: 35,
                  minHeight: 35,
                  backgroundColor: theme => theme.palette.primary.main,
                  borderRadius: 28,
                  '&:hover': { bgcolor: theme => theme.palette.error.main },
                }}
              >
                <InstagramIcon sx={{ color: 'white' }} fontSize='small' />
              </Button>
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant='h6'>Services</Typography>
            <List sx={{ mt: 1 }}>
              {serviceLinks.map(e => (
                <ListItem
                  sx={{
                    p: 0,
                    '&:hover': { color: theme => theme.palette.error.main },
                    cursor: 'pointer',
                    transition: '.2s',
                    color: theme => theme.palette.secondary.main,
                  }}
                  key={e}
                >
                  <ListItemText primary={e} sx={{ fontWeight: 900 }} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant='h6'>Community</Typography>
            <List sx={{ mt: 1 }}>
              {communityLinks.map(e => (
                <ListItem
                  sx={{
                    p: 0,
                    '&:hover': { color: theme => theme.palette.error.main },
                    cursor: 'pointer',
                    transition: '.2s',
                    color: theme => theme.palette.secondary.main,
                  }}
                  key={e}
                >
                  <ListItemText primary={e} sx={{ fontWeight: 900 }} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant='h6'>Subscribe Newsletters</Typography>
            <Typography sx={{ color: theme => theme.palette.secondary.main, mt: 2.5, pr: 5 }}>
              Get our latest news and ideas to your inbox
            </Typography>
            <TextField
              variant='standard'
              color='primary'
              placeholder='Your Email'
              sx={{ mt: 2 }}
              InputProps={{
                style: {
                  backgroundColor: '#03a4ed',
                  borderRadius: 50,
                  padding: 6,
                  paddingLeft: 20,
                  paddingRight: 20,
                  color: '#fff',
                  outline: 'none !important',
                },
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position='end'>
                    <SendIcon sx={{ color: '#fff' }} />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </Box>
        </Stack>
        <Divider sx={{ mt: 5 }} />
        <Box sx={{ color: theme => theme.palette.secondary.main, textAlign: 'center', mt: 3 }}>
          <Typography gutterBottom>Copyright © 2021 Onix Digital Co., Ltd. All Rights Reserved.</Typography>
          <Typography>
            Designed by
            <Box component='span' sx={{ color: theme => theme.palette.error.main }}>
              TemplateMo
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
