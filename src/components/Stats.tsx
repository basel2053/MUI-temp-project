import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Stats = () => {
  return (
    <Container sx={{ maxWidth: { xl: 1350, lg: 1400, md: 1040, tl: 800, sm: 600 }, mt: 16, mb: 14 }}>
      <Stack direction="row" spacing={4}>
        <img src="/images/about-left-image.png" alt="about-left" width="48%" />
        <Box>
          <Typography
            variant="h4"
            fontWeight="900"
            sx={{ mb: 6, fontSize: 30, color: '#2a2a2a', letterSpacing: '0.25px', lineHeight: '44px' }}
          >
            Grow Your Website With Our <span style={{ color: '#03A4ED', margin: '0 4px' }}> SEO Tools</span> &
            <span style={{ color: '#FF695F', margin: '0 4px' }}>Project</span> Management
          </Typography>
          <p style={{ lineHeight: 2 }}>
            You can browse free HTML templates on Too CSS website. Visit the website and explore latest website
            templates for your projects.
          </p>
          <Stack direction="row" gap={3}>
            <Box
              sx={{
                my: 4,
              }}
            >
              <img src="/images/service-icon-01.png" alt="" />
              <Typography variant="h3" fontWeight="900" sx={{ mb: 0 }}>
                320
              </Typography>
              <p style={{ color: '#FF695F' }}>SEO Projects</p>
              <Typography variant="body1" lineHeight={1.8} sx={{ mt: 3, borderTop: '1px solid #eee', pt: 2 }}>
                Lorem ipsum dolor sitti amet, consectetur.
              </Typography>
            </Box>
            <Box
              sx={{
                my: 4,
              }}
            >
              <img src="/images/service-icon-02.png" alt="" />
              <Typography variant="h3" fontWeight="900" sx={{ mb: 0 }}>
                640
              </Typography>
              <p style={{ color: '#FF695F' }}>Websites</p>
              <Typography variant="body1" lineHeight={1.8} sx={{ mt: 3, borderTop: '1px solid #eee', pt: 2 }}>
                Lorem ipsum dolor sitti amet, consectetur.
              </Typography>
            </Box>
            <Box
              sx={{
                my: 4,
              }}
            >
              <img src="/images/service-icon-01.png" alt="" />
              <Typography variant="h3" fontWeight="900" sx={{ mb: 0 }}>
                120
              </Typography>
              <p style={{ color: '#FF695F' }}>Satisfied Clients</p>
              <Typography variant="body1" lineHeight={1.8} sx={{ mt: 3, borderTop: '1px solid #eee', pt: 2 }}>
                Lorem ipsum dolor sitti amet, consectetur.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Stats;
