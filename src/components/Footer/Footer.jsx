import logo from '../../images/logo.png';
// import arrow from '../../images/arrow-right.svg';

import { Container, Arrow } from './Footer.styled';

const Footer = () => {
  return (
    <Container>
      <img src={logo} alt="Logo"></img>
      <a href="https//">
        <Arrow>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.95312 6.38L7.99979 2.33334L12.0465 6.38"
              stroke="#f2f7f6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 13.6666L8 2.44663"
              stroke="#f2f7f6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Arrow>
      </a>
      
    </Container>
  );
};
export default Footer;
