import { Btn, Image } from './Button.styled';
import arrowRight from '../../../images/arrow-right.png';

import { Link } from 'react-scroll';

const MainBtn = ({ target }) => {
  return (
    <>
      <Link to={target} smooth={true} duration={1000}>
        <Btn>
          <span>Learn more</span>
          <Image src={arrowRight} alt="arrow-right" />
        </Btn>
      </Link>
    </>
  );
};

export default MainBtn;
