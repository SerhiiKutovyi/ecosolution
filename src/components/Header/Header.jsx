import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import GetInTouch from '../Button/GetInTouch/GetInTouch';

import { Container } from './Header.styled';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo"></img>
      <BurgerMenu />
      <GetInTouch target="contactUs" />
    </Container>
  );
};
export default Header;
