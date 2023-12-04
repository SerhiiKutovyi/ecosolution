import logo from '../../images/logo.png';

import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';

import { Link } from 'react-scroll';

import {
  Container,
  Arrow,
  Wrapper,
  Icons,
  Address,
  Email,
} from './Footer.styled';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="Logo"></img>
        <Link to="main" smooth={true} duration={1000}>
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
        </Link>
      </Wrapper>

      <ul>
        <Icons>
          <a href="https://uk-ua.facebook.com/">
            <img src={facebook} alt="facebook icon" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="instagram icon" />
          </a>
        </Icons>
        <Address>
          <a href="https://maps.app.goo.gl/MYpZmmmjnNge6Peu6">
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </a>
        </Address>
        <Email>
          <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
        </Email>
        <li>
          <p>ecosolution © 2023</p>
        </li>
      </ul>
    </Container>
  );
};
export default Footer;
