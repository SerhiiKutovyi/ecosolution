import { Swiper } from 'swiper/react';
import styled from 'styled-components';

export const Container = styled(Swiper)`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 26px;

  @media screen and (min-width: 768px) {
    margin-bottom: 107px;
  }

  .swiper-button-prev {
    left: 240px;
    top: 53px;
    color: aqua;
  }

  .swiper-button-next {
    left: 280px;
    top: 53px;
    color: aqua;
  }

  .swiper-pagination {
    left: 20px;
    top: 53px;
    color: red;
    width: 35px;
    height: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const CasesTitle = styled.h2`
  width: 264px;

  margin-bottom: 24px;

  font-family: var(--title-font);
  font-weight: 400;
  font-style: normal;
  font-size: 28px;
  line-height: calc(28 / 28);

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;

    font-size: 36px;
    line-height: calc(36 / 36);
  }
`;

export const GreenLine = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    margin-left: 90px;
    display: block;
    height: 65px;
    border-left: 1px solid var(--burger-hover-background-color);
  }
`;

// export const ButtonSwiper = styled.div`
//   padding: 20px;
//   background-color: white;
//   width: 200px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;
