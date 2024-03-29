import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled(Swiper)`
  
  margin-bottom: 26px;

  @media screen and (min-width: 768px) {
    margin-bottom: 107px;
  }

  .swiper-button-next,
  .swiper-button-prev,
  .swiper-pagination {
    top: unset !important;
    left: unset !important;
    bottom: unset !important;
    width: auto !important;
    right: unset !important ;
    position: unset !important;
  }
`;

export const BtnContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 200px;
`;

export const ButtonSwiper = styled.div`
  padding: 20px;
  background-color: white;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


