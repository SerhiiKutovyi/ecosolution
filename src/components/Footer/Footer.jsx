import logo from '../../images/logo.png';

import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';

import { Link } from 'react-scroll';

import {
  Container,
  Wrapper,
  Icons,
  Address,
  Email,
  GreenLine,
} from './Footer.styled';
import ButtonArrow from '../Button/ButtonArrow/ButtonArrow';

const Footer = () => {
  return (
    <Container>
      <GreenLine />
      <Wrapper>
        <a href="/" alt="Home">
          <img src={logo} alt="Logo"></img>
        </a>

        <Link to="main" smooth={true} duration={1000}>
          <ButtonArrow />
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
