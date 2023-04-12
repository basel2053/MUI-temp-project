import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CallIcon from '@mui/icons-material/Call';

// import required modules
import { Autoplay, Pagination } from 'swiper';

export default function HeroSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + ' hero-slider__pagination ' + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className="mySwiper hero-slider"
        style={{ marginBottom: '2rem' }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <Typography variant="h6" sx={{ color: theme => theme.palette.error.main }}>
            WELCOME TO ONIX DIGITAL
          </Typography>
          <Typography variant="h3" fontWeight="900" lineHeight={1.5}>
            Build
            <Typography
              variant="h3"
              display="inline"
              fontWeight="900"
              sx={{ mx: 1, color: theme => theme.palette.primary.main }}
            >
              your website
            </Typography>
            the best in
            <Typography
              variant="h3"
              display="inline"
              fontWeight="900"
              sx={{ ml: 1, color: theme => theme.palette.error.main }}
            >
              SEO
            </Typography>
            ?
          </Typography>
          <p>this is a professional looking HTML Bootstrap 5 website template brought to you by TemplateMo website.</p>
          <Stack direction="row" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              sx={{
                color: '#fff',
                fontWeight: 400,
                '&:hover': { bgcolor: theme => theme.palette.error.main },
                py: 1.4,
                px: 3,
                borderRadius: '40px',
                mr: 4,
              }}
            >
              Message Us Now
            </Button>
            <Stack
              sx={{
                background: 'linear-gradient(105deg, rgba(255,104,95,1) 0%, rgba(255,144,104,1) 100%)',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1.3,
                borderRadius: '50%',
                mr: 1,
              }}
            >
              <CallIcon
                sx={{
                  color: '#fff',
                }}
              />
            </Stack>
            <Typography color="error">010-020-0340</Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Typography variant="h6" sx={{ color: theme => theme.palette.error.main }}>
            ONLINE MARKETING
          </Typography>
          <Typography variant="h3" fontWeight="900" lineHeight={1.5}>
            Get the
            <Typography
              variant="h3"
              display="inline"
              fontWeight="900"
              sx={{ mx: 1, color: theme => theme.palette.primary.main }}
            >
              best ideas
            </Typography>
            for
            <Typography
              variant="h3"
              display="inline"
              fontWeight="900"
              sx={{ ml: 1, color: theme => theme.palette.error.main }}
            >
              your website
            </Typography>
          </Typography>
          <p>
            You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites. Contact us
            for more info. Thank you.
          </p>
          <Stack direction="row" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              sx={{
                color: '#fff',
                fontWeight: 400,
                '&:hover': { bgcolor: theme => theme.palette.error.main },
                py: 1.4,
                px: 3,
                borderRadius: '40px',
                mr: 4,
              }}
            >
              Our Services
            </Button>
            <Stack
              sx={{
                background: 'linear-gradient(105deg, rgba(255,104,95,1) 0%, rgba(255,144,104,1) 100%)',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1.3,
                borderRadius: '50%',
                mr: 1,
              }}
            >
              <CallIcon
                sx={{
                  color: '#fff',
                }}
              />
            </Stack>
            <Typography color="error">090-080-0760</Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Typography variant="h6" sx={{ color: theme => theme.palette.error.main }}>
            VIDEO TUTORIALS
          </Typography>
          <Typography variant="h3" fontWeight="900" lineHeight={1.5}>
            Watch
            <Typography
              variant="h3"
              display="inline"
              fontWeight="900"
              sx={{ mx: 1, color: theme => theme.palette.primary.main }}
            >
              our videos
            </Typography>
            for your
            <Typography
              variant="h3"
              display="inline"
              fontWeight="900"
              sx={{ ml: 1, color: theme => theme.palette.error.main }}
            >
              project
            </Typography>
            ?
          </Typography>
          <p>
            Please
            <a
              rel="nofollow"
              href="#"
              target="_blank"
              style={{ textDecoration: 'none', margin: '0 4px', color: '#03A4ED' }}
            >
              support us
            </a>
            a little via PayPal if this digital marketing HTML template is useful for you. Thank you.
          </p>
          <Stack direction="row" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              sx={{
                color: '#fff',
                fontWeight: 400,
                '&:hover': { bgcolor: theme => theme.palette.error.main },
                py: 1.4,
                px: 3,
                borderRadius: '40px',
                mr: 4,
              }}
            >
              Watch Videos
            </Button>
            <Stack
              sx={{
                background: 'linear-gradient(105deg, rgba(255,104,95,1) 0%, rgba(255,144,104,1) 100%)',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1.3,
                borderRadius: '50%',
                mr: 1,
              }}
            >
              <CallIcon
                sx={{
                  color: '#fff',
                }}
              />
            </Stack>
            <Typography color="error">050-040-0320</Typography>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
