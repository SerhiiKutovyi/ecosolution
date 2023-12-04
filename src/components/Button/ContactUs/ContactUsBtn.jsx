import { Btn } from '../ContactUs/ContactUsBtn.styled';
import { Link } from 'react-scroll';

const ContactUsBtn = ({ target }) => {
  return (
    <>
      <Link to={target} smooth={true} duration={1000}>
        <Btn>
          <span>Contact Us</span>
          <div></div>
        </Btn>
      </Link>
    </>
  );
};

export default ContactUsBtn;
