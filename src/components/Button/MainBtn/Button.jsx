import { Btn, Image } from './Button.styled';
import arrowRight from '../../../images/arrow-right.png';

const MainBtn = () => {
  return (
    <>
      <Btn>
        <span>Learn more</span>
        <Image src={arrowRight} alt="arrow-right" />
      </Btn>
    </>
  );
};

export default MainBtn;
