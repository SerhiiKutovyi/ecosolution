import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled(Swiper)`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`;

export const Prev = styled.div`
  display: block;
  width: 66px;
  height: 66px;

  border-radius: 50%;
  background-color: wheat;

  cursor: pointer;
`;

export const Next = styled.div`
  width: 66px;
  height: 66px;

  border-radius: 50%;
  background-color: wheat;

  cursor: pointer;
`;

export const SlidPanel = styled.div`
  display: flex;
  align-items: center;

  overflow-x: scroll;
  scroll-snap-type: mandatory;

  img {
    /* width: 320px;
    height: 318px;

    scroll-snap-align: start;
    min-width: 100%; */
  }
`;
