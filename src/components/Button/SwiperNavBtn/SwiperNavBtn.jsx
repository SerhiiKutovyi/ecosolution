import React from 'react';

import { useSwiper } from 'swiper/react';
import { BtnStyled } from '../SwiperNavBtn/SwiperNavBtn.styled';

const SwiperNavBtn = () => {
  const swiper = useSwiper();
  return (
    <div>
      <BtnStyled onClick={() => swiper.slidePrev()}>Prev</BtnStyled>
      <BtnStyled onClick={() => swiper.slideNext()}>Next</BtnStyled>
    </div>
  );
};

export default SwiperNavBtn;
