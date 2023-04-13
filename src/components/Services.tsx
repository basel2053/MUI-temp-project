import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ServiceSlider from './sliders/ServiceSlider';

const Services = () => {
  return (
    <>
      <Box sx={{ position: 'absolute' }}>
        <img src="/images/services-left-dec.png" />
      </Box>
      <Container sx={{ maxWidth: { xl: 1350, lg: 1400, md: 1040, tl: 800, sm: 600 }, mt: 14, mb: 4 }}>
        <Typography textAlign="center" variant="h4" fontWeight="700">
          We <span style={{ color: '#03A4ED' }}> Provide</span> The Best Service <br />
          With
          <span style={{ color: '#FF695F' }}> Our Tools</span>
        </Typography>
        <Typography
          textAlign="center"
          variant="h4"
          fontWeight="700"
          sx={{ textTransform: 'uppercase', color: theme => theme.palette.error.main, opacity: 0.15, mb: 6 }}
        >
          OUR SERVICES
        </Typography>
        <ServiceSlider />
      </Container>
      <Box sx={{ position: 'absolute', right: 0, mt: -27 }}>
        <img src="/images/services-right-dec.png" />
      </Box>
    </>
  );
};

export default Services;
