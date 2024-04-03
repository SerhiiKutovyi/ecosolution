import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import bg1 from '../../images/lviv.jpg';
import bg2 from '../../images/zitomiyr.jpg';
import bg3 from '../../images/rivne.jpg';
import bg4 from '../../images/kherson.jpg';
import bg5 from '../../images/zaporizhia.jpg';

import {
  CasesTitle,
  GreenLine,
  Wrapper,
  Container,
  ButtonSwiper,
  // BtnContainer,
} from './Cases.styled';

const Cases = () => {
  return (
    <>
      <Wrapper>
        <CasesTitle id="cases">SUCCESSFUL CASES OF OUR COMPANY</CasesTitle>
        <GreenLine></GreenLine>
      </Wrapper>
      <Container
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          type: 'fraction',
          clickable: true,
          el: '.swiper-pagination',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
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
      <ButtonSwiper>
        <div className="my-swiper swiper-button-prev"></div>
        <div className="my-swiper swiper-pagination"></div>
        <div className="my-swiper swiper-button-next"></div>
      </ButtonSwiper>
    </>
  );
};
export default Cases;
