import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import CallIcon from '@mui/icons-material/Call';
import Slider from './sliders/Slider';

const Hero = (): JSX.Element => {
  return (
    <Stack direction="row" maxWidth="100vw">
      <Box sx={{ display: 'absolute', width: 0 }}>
        <img src="/images/baner-dec-left.png" alt="banner-left" />
      </Box>
      <Container
        sx={{ maxWidth: { xl: 1350, lg: 1400, md: 1040, tl: 800, sm: 600 }, alignSelf: 'center', ml: 11, width: '40%' }}
      >
        <Slider />
      </Container>
      <img src="/images/banner-right-image.png" alt="banner-right" style={{ flex: 1 }} />
    </Stack>
  );
};

export default Hero;
