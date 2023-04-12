import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper service-slider"
    >
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            p: 4,
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '20px',
            margin: '15px',
          }}
        >
          <Typography variant="h5" fontWeight="700" sx={{ mb: 3 }}>
            Learn More about our Guidelines
          </Typography>
          <img src="/images/service-icon-01.png" alt="" />
          <Typography variant="body1" sx={{ mt: 4, borderTop: '1px solid #eee', pt: 4 }}>
            Feel free to use this template for your business
          </Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            p: 4,
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '20px',
            margin: '15px',
          }}
        >
          <Typography variant="h5" fontWeight="700" sx={{ mb: 3 }}>
            Develop The Best Strategy for Business
          </Typography>
          <img src="/images/service-icon-02.png" alt="" />
          <Typography variant="body1" sx={{ mt: 4, borderTop: '1px solid #eee', pt: 4 }}>
            Get to know more about the topic in details
          </Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            p: 4,
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '20px',
            margin: '15px',
          }}
        >
          <Typography variant="h5" fontWeight="700" sx={{ mb: 3 }}>
            UI / UX Desing and Development
          </Typography>
          <img src="/images/service-icon-03.png" alt="" />
          <Typography variant="body1" sx={{ mt: 4, borderTop: '1px solid #eee', pt: 4 }}>
            Get to know more about the topic in details
          </Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            p: 4,
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '20px',
            margin: '15px',
          }}
        >
          <Typography variant="h5" fontWeight="700" sx={{ mb: 3 }}>
            Discover & Explore our SEO Tips
          </Typography>
          <img src="/images/service-icon-04.png" alt="" />
          <Typography variant="body1" sx={{ mt: 4, borderTop: '1px solid #eee', pt: 4 }}>
            Feel free to use this template for your business
          </Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            p: 4,
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '20px',
            margin: '15px',
          }}
        >
          <Typography variant="h5" fontWeight="700" sx={{ mb: 3 }}>
            Optimizing your website for Speed
          </Typography>
          <img src="/images/service-icon-01.png" alt="" />
          <Typography variant="body1" sx={{ mt: 4, borderTop: '1px solid #eee', pt: 4 }}>
            Get to know more about the topic in details
          </Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            p: 4,
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '20px',
            margin: '15px',
          }}
        >
          <Typography variant="h5" fontWeight="700" sx={{ mb: 3 }}>
            See The Strategy In The Market
          </Typography>
          <img src="/images/service-icon-02.png" alt="" />
          <Typography variant="body1" sx={{ mt: 4, borderTop: '1px solid #eee', pt: 4 }}>
            Get to know more about the topic in details
          </Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            p: 4,
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '20px',
            margin: '15px',
          }}
        >
          <Typography variant="h5" fontWeight="700" sx={{ mb: 3 }}>
            Best Content Ideas for your pages
          </Typography>
          <img src="/images/service-icon-03.png" alt="" />
          <Typography variant="body1" sx={{ mt: 4, borderTop: '1px solid #eee', pt: 4 }}>
            Feel free to use this template for your business
          </Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            p: 4,
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '20px',
            margin: '15px',
          }}
        >
          <Typography variant="h5" fontWeight="700" sx={{ mb: 3 }}>
            Content Ideas for your next project
          </Typography>
          <img src="/images/service-icon-02.png" alt="" />
          <Typography variant="body1" sx={{ mt: 4, borderTop: '1px solid #eee', pt: 4 }}>
            Feel free to use this template for your business
          </Typography>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            boxShadow: '0px 0px 15px rgba(0,0,0,0.05)',
            p: 4,
            bgcolor: '#fff',
            textAlign: 'center',
            borderRadius: '20px',
            margin: '15px',
          }}
        >
          <Typography variant="h5" fontWeight="700" sx={{ mb: 3 }}>
            Discover the digital marketing trend
          </Typography>
          <img src="/images/service-icon-04.png" alt="" />
          <Typography variant="body1" sx={{ mt: 4, borderTop: '1px solid #eee', pt: 4 }}>
            Get to know more about the topic in details
          </Typography>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default ServiceSlider;
