import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProjectSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper project-slider"
    >
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            borderRadius: '20px',
            width: 460,
            transition: '0.3s all',
            ':hover': { opacity: 0.75 },
          }}
        >
          <img src="/images/portfolio-01.jpg" width="460" style={{ borderRadius: '20px' }} />
          <Box sx={{ position: 'absolute', backgroundImage: `url(/images/hover-bg.png)` }}></Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            borderRadius: '20px',
            width: 460,
          }}
        >
          <img src="/images/portfolio-02.jpg" width="460" style={{ borderRadius: '20px' }} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            borderRadius: '20px',
            width: 460,
          }}
        >
          <img src="/images/portfolio-03.jpg" width="460" style={{ borderRadius: '20px' }} />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectSlider;
