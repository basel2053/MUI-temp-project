import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Score = () => {
  return (
    <Container
      sx={{
        maxWidth: { xl: 1350, lg: 1400, md: 1040, tl: 800, sm: 600 },
        mt: 0,
        mb: 4,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url(/images/subscribe-bg.png)',
          backgroundRepeat: 'no-repeat',
          borderRadius: '20px',
          padding: '60px 0',
          backgroundSize: 'cover',
        }}
      >
        <Box sx={{ position: 'absolute', top: -20, right: 0 }}>
          <img src="/images/subscribe-dec.png" alt="rocket" />
        </Box>
        <Typography variant="h4" textAlign="center" fontWeight="700" sx={{ color: '#fff' }}>
          Know Your Website SEO Score by Email
        </Typography>
        <Stack
          direction="row"
          sx={{ bgcolor: 'white', width: '83%', margin: 'auto', borderRadius: 40, py: 2, mt: 3, pr: 3 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <TextField
            placeholder="Your Website URL"
            sx={{ width: '40%', px: 3 }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          />
          <TextField
            placeholder="Your Email"
            sx={{ width: '40%', borderLeft: '1px solid #ddd', px: 3 }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: '20%',
              color: '#fff',
              fontWeight: 400,
              '&:hover': { bgcolor: theme => theme.palette.error.main },
              borderRadius: 40,
              py: 1.3,
            }}
          >
            Subscribe
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Score;
