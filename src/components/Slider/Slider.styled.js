import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled(Swiper)`
  margin-bottom: 26px;

  @media screen and (min-width: 768px) {
    margin-bottom: 107px;
  }


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
`;
