
import { Btn } from '../GetInTouch/GetInTouch.styled';
import { Link } from 'react-scroll';

const GetInTouch = ({target}) => {
  return (
    <>
      <Link to={target} smooth={true} duration={1000}>
        <Btn>
          <span>Get in touch</span>
          <div></div>
        </Btn>
      </Link>
    </>
  );
};

export default GetInTouch;
