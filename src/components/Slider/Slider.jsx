import { Container, Prev, SlidPanel, Next } from './Slider.styled';

// import bg1 from '../../images/lviv.jpg';
// import bg2 from '../../images/zitomiyr.jpg';
// import bg3 from '../../images/rivne.jpg';
// import bg4 from '../../images/kherson.jpg';
// import bg5 from '../../images/zaporizhia.jpg';
// import { useRef } from 'react';
// // import arrow from '../../images/arrow-right.png';

// const Slider = () => {
//   let imageRef = useRef(null);

//   const images = [
//     { id: 1, title: bg1, alt: 'Lviv' },
//     { id: 2, title: bg2, alt: 'Zhytomyr ' },
//     { id: 3, title: bg3, alt: 'Rivne' },
//     { id: 4, title: bg4, alt: 'Kherson' },
//     { id: 5, title: bg5, alt: 'Zaporizhia' },
//   ];

//   const prev = () => imageRef.current.scrollLeft;

//   return (
//     <Container>
//       <Prev onClick={prev}>{/* <img src={arrow} alt="arrow-right" /> */}</Prev>
//       <Next></Next>
//       <SlidPanel ref={imageRef}>
//         {images.map(image => {
//           return <img key={image.id} src={image.title} alt={image.alt} />;
//         })}
//       </SlidPanel>
//     </Container>
//   );
// };
// export default Slider;

import { Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';

import bg1 from '../../images/lviv.jpg';
import bg2 from '../../images/zitomiyr.jpg';
import bg3 from '../../images/rivne.jpg';
import bg4 from '../../images/kherson.jpg';
import bg5 from '../../images/zaporizhia.jpg';

const CustomPrevButton = () => {
  console.log('clic');
};

const CustomNextButton = () => {
  console.log('clic');
};

const Slider = () => {
  return (
    <Container
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ type: 'fraction' }}
      navigation={{
        prevEl: 'CustomPrevButton',
        nextEl: 'CustomNextButton',
      }}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
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
      <Prev onClick={CustomPrevButton}></Prev>
      <Next onClick={CustomNextButton}></Next>
    </Container>
  );
};

export default Slider;
