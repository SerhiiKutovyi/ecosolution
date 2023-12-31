import UserForm from '../UserForm/UserForm';

import call from '../../images/call.svg';
import mail from '../../images/sms.svg';
import map from '../../images/map.svg';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';

import {
  Container,
  ContactUsTitle,
  Tel,
  Social,
  Networks,
  Img,
  Wrapper,
} from './ContactUs.styled';

const ContactUs = () => {
  return (
    <>
      <ContactUsTitle id="contactUs">CONTACT US</ContactUsTitle>
      <Wrapper>
        <Container>
          <ul>
            <li>
              <p>Phone:</p>
              <Tel href="tel:38 (098) 12 34 567">
                <img src={call} alt="Call icon" />
                38 (098) 12 34 567
              </Tel>
              <a href="tel:38 (098) 12 34 567">
                <img src={call} alt="Call icon" />
                38 (098) 12 34 567
              </a>
            </li>
            <li>
              <p>E-mail:</p>
              <a href="mailto:office@ecosolution.com">
                <img src={mail} alt="mail icon" />
                office@ecosolution.com
              </a>
            </li>
            <li>
              <p>Address:</p>
              <a href="https://maps.app.goo.gl/MYpZmmmjnNge6Peu6">
                <img src={map} alt="map icon" />
                <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
              </a>
            </li>
            <Social>
              <Networks>Social Networks:</Networks>
              <a href="https://uk-ua.facebook.com/">
                <Img src={facebook} alt="facebook icon" />
              </a>

              <a href="https://www.instagram.com/">
                <img src={instagram} alt="instagram icon" />
              </a>
            </Social>
          </ul>
        </Container>
        <UserForm id="userform" />
      </Wrapper>
    </>
  );
};
export default ContactUs;
