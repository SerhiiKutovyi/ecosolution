import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

import { Container, Image } from './Header.styled';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <Container>
      <Image src={logo} alt="Logo"></Image>
      <BurgerMenu />
    </Container>
  );
};
export default Header;
