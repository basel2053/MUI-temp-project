import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Plans = () => {
  return (
    <div style={{ position: 'relative', marginBottom: '10rem' }}>
      <Typography textAlign="center" variant="h4" fontWeight="700">
        Select A Suitable <span style={{ color: '#03A4ED' }}> Plan</span> For Your <br />
        Next
        <span style={{ color: '#FF695F' }}> Projects</span>
      </Typography>
      <Typography
        textAlign="center"
        variant="h4"
        fontWeight="700"
        sx={{ textTransform: 'uppercase', color: theme => theme.palette.error.main, opacity: 0.15, mb: 6 }}
      >
        OUR PLANS
      </Typography>
      <Box sx={{ position: 'absolute', right: 0, zIndex: -1, top: -80 }}>
        <img src="/images/tables-right-dec.png" />
      </Box>
      <Box sx={{ position: 'absolute', left: 0, zIndex: -1, top: 0 }}>
        <img src="/images/tables-left-dec.png" />
      </Box>
      <Container
        sx={{ maxWidth: { xl: 1350, lg: 1400, md: 1040, tl: 800, sm: 600 }, mt: 0, mb: 4, position: 'relative' }}
      >
        <Stack direction="row" textAlign="center" gap={3}>
          <Box
            sx={{
              bgColor: '#fff',
              boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
              width: '31%',
              py: 6,
              px: 4,
              borderRadius: '40px',
              position: 'relative',
            }}
          >
            <Box sx={{ position: 'absolute', zIndex: -1, overflow: 'hidden', left: 0, top: 0 }}>
              <img src="/images/first-plan-bg.png" />
            </Box>
            <Typography variant="h6" fontWeight="900" fontSize="20px">
              Starter Plan
            </Typography>
            <p style={{ color: '#FF695F', textDecoration: 'line-through', marginBottom: 0 }}>$160/mo</p>
            <Typography variant="h3" fontWeight="900" sx={{ color: theme => theme.palette.error.main, mb: 4 }}>
              $140
            </Typography>
            <p className="plan-desc">10 Projects</p>
            <p className="plan-desc">100 GB space</p>
            <p className="plan-desc">20 SEO checkups</p>
            <p className="plan-desc">Basic Support</p>
            <Button
              variant="contained"
              color="primary"
              sx={{
                color: '#fff',
                '&:hover': { bgcolor: theme => theme.palette.error.main },
                borderRadius: '40px',
                py: 1,
                px: 3,
                fontWeight: 400,
                fontSize: { lg: 15 },
                mb: 2,
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box
            sx={{
              bgColor: '#fff',
              boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
              width: '31%',
              py: 6,
              px: 4,
              borderRadius: '40px',
              position: 'relative',
            }}
          >
            <Box sx={{ position: 'absolute', zIndex: -1, overflow: 'hidden', left: 10, top: -2 }}>
              <img src="/images/second-plan-bg.png" />
            </Box>
            <Typography variant="h6" fontWeight="900" fontSize="20px">
              Standard Plan
            </Typography>
            <p style={{ color: '#FF695F', textDecoration: 'line-through', marginBottom: 0 }}>$240/mo</p>
            <Typography variant="h3" fontWeight="900" sx={{ color: theme => theme.palette.error.main, mb: 4 }}>
              $200
            </Typography>
            <p className="plan-desc">20 Projects</p>
            <p className="plan-desc">200 GB space</p>
            <p className="plan-desc">50 SEO checkups</p>
            <p className="plan-desc">Pro Support</p>
            <Button
              variant="contained"
              color="primary"
              sx={{
                color: '#fff',
                '&:hover': { bgcolor: theme => theme.palette.error.main },
                borderRadius: '40px',
                py: 1,
                px: 3,
                fontWeight: 400,
                fontSize: { lg: 15 },
                mb: 3,
              }}
            >
              Get It Now
            </Button>
          </Box>
          <Box
            sx={{
              bgColor: '#fff',
              boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
              width: '31%',
              py: 6,
              px: 4,
              borderRadius: '40px',
              position: 'relative',
            }}
          >
            <Box sx={{ position: 'absolute', zIndex: -1, overflow: 'hidden', right: 0, top: -2 }}>
              <img src="/images/third-plan-bg.png" />
            </Box>
            <Typography variant="h6" fontWeight="900" fontSize="20px">
              Advanced Plan
            </Typography>
            <p style={{ color: '#FF695F', textDecoration: 'line-through', marginBottom: 0 }}>$360/mo</p>
            <Typography variant="h3" fontWeight="900" sx={{ color: theme => theme.palette.error.main, mb: 4 }}>
              $280
            </Typography>
            <p className="plan-desc">30 Projects</p>
            <p className="plan-desc">300 GB space</p>
            <p className="plan-desc">100 SEO checkups</p>
            <p className="plan-desc">Best Support</p>
            <Button
              variant="contained"
              color="primary"
              sx={{
                color: '#fff',
                '&:hover': { bgcolor: theme => theme.palette.error.main },
                borderRadius: '40px',
                py: 1,
                px: 3,
                fontWeight: 400,
                fontSize: { lg: 15 },
                mb: 3,
              }}
            >
              Buy Now
            </Button>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Plans;
