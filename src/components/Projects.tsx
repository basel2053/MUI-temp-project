import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ProjectSlider from './sliders/ProjcetSlider';

const Projects = () => {
  return (
    <>
      <Box sx={{ position: 'absolute', left: '4%' }}>
        <img src="/images/portfolio-left-dec.png" />
      </Box>
      <Typography textAlign="center" variant="h4" fontWeight="700">
        Our Recent <span style={{ color: '#03A4ED' }}> Projects</span> & Case <br />
        Studies
        <span style={{ color: '#FF695F' }}> For Clients</span>
      </Typography>
      <Typography
        textAlign="center"
        variant="h4"
        fontWeight="700"
        sx={{ textTransform: 'uppercase', color: theme => theme.palette.error.main, opacity: 0.15, mb: 6 }}
      >
        OUR PORTFOLIO
      </Typography>

      <div style={{ margin: '20px 2rem' }}>
        <ProjectSlider />
      </div>
    </>
  );
};

export default Projects;
