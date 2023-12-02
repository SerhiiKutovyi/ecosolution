// import { Container, Prev, SlidPanel, Next } from './Slider.styled';

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

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import bg1 from '../../images/lviv.jpg';
import bg2 from '../../images/zitomiyr.jpg';
import bg3 from '../../images/rivne.jpg';
import bg4 from '../../images/kherson.jpg';
import bg5 from '../../images/zaporizhia.jpg';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
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
      ...
    </Swiper>
  );
};

export default Slider;
