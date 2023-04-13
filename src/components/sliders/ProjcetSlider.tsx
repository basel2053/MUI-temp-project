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
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      className="mySwiper project-slider"
    >
      <SwiperSlide>
        <Box
          sx={{
            borderRadius: '20px',
            width: 460,
            cursor: 'pointer',
          }}
        >
          <Box className="portfolio-container" sx={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/portfolio-01.jpg" width="460" style={{ borderRadius: '20px' }} />
            <Box
              sx={{
                backgroundImage: 'url(/images/hover-bg.png)',
                position: 'absolute',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                zIndex: 20,
                bottom: 0,
                right: 10,
                px: 8,
                pt: 14,
                pb: 2,
                transform: 'translateY(216px)',
                textAlign: 'right',
              }}
            >
              <Typography variant="h5" fontWeight="700">
                First Project
              </Typography>
              <p>Plot Listing</p>
            </Box>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            borderRadius: '20px',
            width: 460,
            cursor: 'pointer',
          }}
        >
          <Box className="portfolio-container" sx={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/portfolio-02.jpg" width="460" style={{ borderRadius: '20px' }} />
            <Box
              sx={{
                backgroundImage: 'url(/images/hover-bg.png)',
                position: 'absolute',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                zIndex: 20,
                bottom: 0,
                right: 10,
                px: 8,
                pt: 14,
                pb: 2,
                transform: 'translateY(216px)',
                textAlign: 'right',
              }}
            >
              <Typography variant="h5" fontWeight="700">
                Project Two
              </Typography>
              <p>SEO & Marketing</p>
            </Box>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            borderRadius: '20px',
            width: 460,
            cursor: 'pointer',
          }}
        >
          <Box className="portfolio-container" sx={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/portfolio-03.jpg" width="460" style={{ borderRadius: '20px' }} />
            <Box
              sx={{
                backgroundImage: 'url(/images/hover-bg.png)',
                position: 'absolute',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                zIndex: 20,
                bottom: 0,
                right: 10,
                px: 8,
                pt: 14,
                pb: 2,
                transform: 'translateY(216px)',
                textAlign: 'right',
              }}
            >
              <Typography variant="h5" fontWeight="700">
                Third Project
              </Typography>
              <p>Space Dynamic SEO</p>
            </Box>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            borderRadius: '20px',
            width: 460,
            cursor: 'pointer',
          }}
        >
          <Box className="portfolio-container" sx={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/portfolio-04.jpg" width="460" style={{ borderRadius: '20px' }} />
            <Box
              sx={{
                backgroundImage: 'url(/images/hover-bg.png)',
                position: 'absolute',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                zIndex: 20,
                bottom: 0,
                right: 10,
                px: 8,
                pt: 14,
                pb: 2,
                transform: 'translateY(216px)',
                textAlign: 'right',
              }}
            >
              <Typography variant="h5" fontWeight="700">
                Project Four
              </Typography>
              <p>Website Marketing</p>
            </Box>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            borderRadius: '20px',
            width: 460,
            cursor: 'pointer',
          }}
        >
          <Box className="portfolio-container" sx={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/portfolio-01.jpg" width="460" style={{ borderRadius: '20px' }} />
            <Box
              sx={{
                backgroundImage: 'url(/images/hover-bg.png)',
                position: 'absolute',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                zIndex: 20,
                bottom: 0,
                right: 10,
                px: 8,
                pt: 14,
                pb: 2,
                transform: 'translateY(216px)',
                textAlign: 'right',
              }}
            >
              <Typography variant="h5" fontWeight="700">
                Fifth Project
              </Typography>
              <p>Digital Assets</p>
            </Box>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            borderRadius: '20px',
            width: 460,
            cursor: 'pointer',
          }}
        >
          <Box className="portfolio-container" sx={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/portfolio-02.jpg" width="460" style={{ borderRadius: '20px' }} />
            <Box
              sx={{
                backgroundImage: 'url(/images/hover-bg.png)',
                position: 'absolute',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                zIndex: 20,
                bottom: 0,
                right: 10,
                px: 8,
                pt: 14,
                pb: 2,
                transform: 'translateY(216px)',
                textAlign: 'right',
              }}
            >
              <Typography variant="h5" fontWeight="700">
                Sixth Project
              </Typography>
              <p>SEO & Marketing</p>
            </Box>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            borderRadius: '20px',
            width: 460,
            cursor: 'pointer',
          }}
        >
          <Box className="portfolio-container" sx={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/portfolio-03.jpg" width="460" style={{ borderRadius: '20px' }} />
            <Box
              sx={{
                backgroundImage: 'url(/images/hover-bg.png)',
                position: 'absolute',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                zIndex: 20,
                bottom: 0,
                right: 10,
                px: 8,
                pt: 14,
                pb: 2,
                transform: 'translateY(216px)',
                textAlign: 'right',
              }}
            >
              <Typography variant="h5" fontWeight="700">
                7th Project
              </Typography>
              <p>SEO & Marketing</p>
            </Box>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            borderRadius: '20px',
            width: 460,
            cursor: 'pointer',
          }}
        >
          <Box className="portfolio-container" sx={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/portfolio-04.jpg" width="460" style={{ borderRadius: '20px' }} />
            <Box
              sx={{
                backgroundImage: 'url(/images/hover-bg.png)',
                position: 'absolute',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                zIndex: 20,
                bottom: 0,
                right: 10,
                px: 8,
                pt: 14,
                pb: 2,
                transform: 'translateY(216px)',
                textAlign: 'right',
              }}
            >
              <Typography variant="h5" fontWeight="700">
                8th Project
              </Typography>
              <p>SEO & Marketing</p>
            </Box>
          </Box>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectSlider;
