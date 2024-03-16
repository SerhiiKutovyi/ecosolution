import SwiperNavBtn from '../Button/SwiperNavBtn/SwiperNavBtn';
import Slider from '../Slider/Slider';
import { CasesTitle, GreenLine, Wrapper } from './Cases.styled';

const Cases = () => {
  return (
    <>
      <Wrapper>
        <CasesTitle id="cases">SUCCESSFUL CASES OF OUR COMPANY</CasesTitle>
        <GreenLine></GreenLine>
      </Wrapper>
      <SwiperNavBtn />
      <Slider />
    </>
  );
};
export default Cases;
