import { Swiper } from 'swiper/react';
import styled from 'styled-components';

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
export const Container = styled(Swiper)`
  margin-bottom: 26px;

  @media screen and (min-width: 768px) {
    margin-bottom: 107px;
  }

  .my-swiper .swiper-button-next,
  .my-swiper .swiper-button-prev,
  .my-swiper .swiper-pagination {
    top: unset !important;
    left: unset !important;
    bottom: unset !important;
    width: auto !important;
    right: unset !important ;
    position: unset !important;
  }
`;

export const BtnContainer = styled.div`
  /*  
  top: 200px;
  left: 0px; */
`;

export const ButtonSwiper = styled.div`
  padding: 20px;
  background-color: white;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
