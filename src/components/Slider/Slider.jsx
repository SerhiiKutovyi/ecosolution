import { useEffect, useState } from 'react';

import { Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import bg1 from '../../images/lviv.jpg';
import bg2 from '../../images/zitomiyr.jpg';
import bg3 from '../../images/rivne.jpg';
import bg4 from '../../images/kherson.jpg';
import bg5 from '../../images/zaporizhia.jpg';

import { Container } from './Slider.styled';

const Slider = () => {
  const [NumberOfSliders, setNumberOfSliders] = useState(
    window.innerWidth >= 768 ? 2 : 1
  );

  useEffect(() => {
    const handleResize = () => {
      setNumberOfSliders(window.innerWidth >= 768 ? 2 : 1);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={NumberOfSliders}
      pagination={{ type: 'fraction' }}
      navigation={{
        prevEl: 'CustomPrevButton',
        nextEl: 'CustomNextButton',
      }}
      loop={true}
    >
      <SwiperSlide>
        <img src={bg1} alt="Lviv" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bg2} alt="Zhytomyr" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bg3} alt="Rivne" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bg4} alt="Kherson" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bg5} alt="Zaporizhia" />
      </SwiperSlide>
    </Container>
  );
};

export default Slider;
