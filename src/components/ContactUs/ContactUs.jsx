import { Container, ContactUsTitle } from './ContactUs.styled';
import call from '../../images/call.svg';
import mail from '../../images/sms.svg';
import map from '../../images/map.svg';

const ContactUs = () => {
  return (
    <>
      <ContactUsTitle>CONTACT US</ContactUsTitle>
      <Container>
        <ul>
          <li>
            <p>Phone:</p>
            <a href="tel:38 (098) 12 34 567">
              <img src={call} alt="Call icon" />
              38 (098) 12 34 567
            </a>
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
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
          </li>
          <li>
            <p>Social Networks:</p>
            
          </li>
        </ul>
      </Container>
    </>
  );
};
export default ContactUs;
